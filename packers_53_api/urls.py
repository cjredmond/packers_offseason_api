from django.conf.urls import url
from django.contrib import admin
from api.views import PlayerListCreateAPIView, FreeAgentListCreateAPIView, DraftPlayerListCreateAPIView, \
CapCasualtyListCreateAPIView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/:players/$', PlayerListCreateAPIView.as_view(), name='player_list_api_view'),
    url(r'^api/:free-agents/$', FreeAgentListCreateAPIView.as_view(), name='free_agent_list_api_view'),
    url(r'^api/:draft-players/$', DraftPlayerListCreateAPIView.as_view(), name='draft_player_list_api_view'),
    url(r'^api/:cap-casualties/$', CapCasualtyListCreateAPIView.as_view(), name='cap_casualty_list_api_view'),

]
