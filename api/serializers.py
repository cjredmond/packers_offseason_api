from rest_framework import serializers
from api.models import Account, Player, FreeAgent, DraftPlayer, CapCasualty, Draft

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = '__all__'

class FreeAgentSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreeAgent
        fields = '__all__'

class DraftPlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = DraftPlayer
        fields = '__all__'

class CapCasualtySerializer(serializers.ModelSerializer):
    class Meta:
        model = CapCasualty
        fields = '__all__'

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'

class DraftSerializer(serializers.ModelSerializer):
    class Meta:
        model = Draft
        fields = '__all__'
