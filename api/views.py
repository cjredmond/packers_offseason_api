from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from api.models import Account, Player, FreeAgent, DraftPlayer, Draft, CapCasualty
from api.serializers import PlayerSerializer, FreeAgentSerializer, DraftPlayerSerializer, CapCasualtySerializer
from django.contrib.auth.models import User
from django.views.generic import TemplateView
import csv
import random


class IndexView(TemplateView):
    template_name = 'index.html'

class PlayerListCreateAPIView(ListCreateAPIView):
    def get_queryset(self):
        return Player.objects.filter(user=self.request.user)
    serializer_class = PlayerSerializer

class PlayerDetailUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    def get_queryset(self):
        return Player.objects.filter(user=self.request.user)
    serializer_class = PlayerSerializer

class FreeAgentListCreateAPIView(ListCreateAPIView):
    def get_queryset(self):
        return FreeAgent.objects.filter(user=self.request.user)
    serializer_class = FreeAgentSerializer

class FreeAgentDetailUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    def get_queryset(self):
        return FreeAgent.objects.filter(user=self.request.user)
    serializer_class = FreeAgentSerializer

class DraftPlayerListCreateAPIView(ListCreateAPIView):
    def get_queryset(self):
        return DraftPlayer.objects.filter(user=self.request.user)
    serializer_class = DraftPlayerSerializer

class CapCasualtyListCreateAPIView(ListCreateAPIView):
    def get_queryset(self):
        return CapCasualty.objects.filter(user=self.request.user)
    serializer_class = CapCasualtySerializer




def add_team_player():
    Player.objects.all().delete()
    with open('api/player.csv') as infile:
        reader = csv.reader(infile)
        for row in reader:
            print(row[0],row[1])
            Player.objects.create(name=row[0],position=row[1],cap_hit=row[2],
            dead_money=row[3], user=User.objects.first())

choices = [.8,.85,.9,.95,1,1,1.1,1.15,1.2]

def add_free_agents():
    FreeAgent.objects.all().delete()
    with open('api/freeagent.csv') as infile:
        reader = csv.reader(infile)
        for row in reader:
            print(row[0])
            FreeAgent.objects.create(name=row[0],position=row[1],cap_hit=row[2],on_team=row[3],
                                     modified_cost=round(float(row[2])*random.choice(choices),2), user=User.objects.first())

def add_draft_players():
    DraftPlayer.objects.all().delete()
    with open('api/draftplayer.csv') as infile:
        reader = csv.reader(infile)
        for row in reader:
            print(row[0])
            DraftPlayer.objects.create(name=row[0] + " " + row[1], position=row[2],cap_hit=row[3],
                                      draft_round=row[4], college=row[5], user=User.objects.first())

def add_cap_casualty_players():
    CapCasualty.objects.all().delete()
    with open('api/capcasualty.csv') as infile:
        reader = csv.reader(infile)
        for row in reader:
            print(row[0], row[1])
            CapCasualty.objects.create(name=row[0] + " " + row[1], position=row[2], cap_hit=round(float(row[3])*random.choice(choices),2),
                                       user=User.objects.first())

def cut_players():
    x = CapCasualty.objects.all().order_by('?')
    for player in x[:20]:
        FreeAgent.objects.create(name=player.name, position=player.position, cap_hit=player.cap_hit, on_team=False,
                                 modified_cost=round(player.cap_hit*random.choice(choices),2), user=User.objects.first())

def seed_db():
    add_team_player()
    add_free_agents()
    add_draft_players()
    add_cap_casualty_players()
    cut_players()
