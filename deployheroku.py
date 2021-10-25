# ffmpeg -i "%a.av" "%a.mp4"

from os import listdir
from os.path import isfile, join
import sys
import subprocess

class PushHeroku:
    def __init__(self,argu):
        if len(argu) == 0:
            argu="default commit"
        self.gitCommands = ["git add -A", "git commit -m {0}".format(argu), "git push heroku master"]
    def subproc(self):
        for comnd in self.gitCommands:
            
            subprocess.call(comnd, shell=True)

ph = PushHeroku(sys.argv[0])
ph.subproc()