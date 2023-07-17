import requests
import json

class loginsession(requests.session):
    def __init__(self,ID,PW):
        super().__init__()
        self.ID = ID
        self.PW = PW



    def _get_keys(self):
        response = requests.get('localhost:3000/auth')
        print(response.text)
        
        s = requests.session()
        s.get('localhost:3000/auth/login')
        #save cookie
        with open('cookie_save','wb')as fin:
            cookie_dumps=json.dumps(s.cookies,fin)

    def _get_encpw(self):
        #bring cookie 
        with open('cookie_save','rb')as fout:
            cookie_loads=json.loads(s.cookies, fout)
        #form new session
        ns=requests.session()
        #bring cookie
        ns.cookies.update(cookie_loads)
        print(ns.cookies.get_dict())
    
    def login(self):
        self._get_keys()
        self._get_encpw()