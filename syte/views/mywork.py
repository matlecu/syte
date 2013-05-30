# -*- coding: utf-8 -*-

from django.http import HttpResponse
from django.conf import settings

def mywork(request):
    f = open('syte/data/mywork.json')
    json_data = f.read()
    return HttpResponse(content=json_data,
                        status=200,
                        content_type='application/json')
