import re
import os
import shutil
import subprocess


class Buredja:
    def __init__(self, srcStatic, dstStatic, srcHtml, dstHtml):
        self.srcStatic = srcStatic
        self.dstStatic = dstStatic
        self.srcHtml = srcHtml
        self.dstHtml = dstHtml

    def execute(self):
        subprocess.call('npm run build', shell=True, cwd=r'arsoreact/')
        self.os2d(self.srcStatic, self.dstStatic)
        shutil.copy(self.srcHtml, self.dstHtml)
        self.filterBaseHtml()

    def filterBaseHtml(self):
        with open(self.dstHtml, 'r+') as f:
            content = f.read()
            matchScripts = r'(<script\s+defer="defer"\s+src="\/static\/js\/main\.\w+\.js"><\/script>)'
            matchCSS = '<link href=\"\/static\/css\/[a-zA-Z0-9_\.]*\.css\" rel\="stylesheet">'
            # print(content)
            scriptsString = re.findall(matchScripts, content, re.DOTALL)
            cssString = re.findall(matchCSS, content, re.DOTALL)
            print(cssString)
            content_new = re.sub(
                '<script src=\"\/static\/js\/[a-zA-Z0-9_\.]*\.js\">\<\/script\>', r'', content, count=2, flags=re.M)
            content_new = re.sub(
                '<link href=\"\/static\/css\/[a-zA-Z0-9_\.]*\.css\" rel\="stylesheet">', r'', content_new, flags=re.M)
            f.seek(0)
            f.write(content_new)
            f.truncate()
        with open(r"templates/react/js.html", 'w+') as f:
            f.seek(0)
            for script in scriptsString:
                f.write(script + "\n")
            f.truncate()
        with open(r"templates/react/css.html", 'w+') as f:
            f.seek(0)
            for cssStri in cssString:
                f.write(cssStri + "\n")
            f.truncate()

    # overwrite source to dest folder function

    def os2d(self, root_src_dir, root_dst_dir):
        for src_dir, dirs, files in os.walk(root_src_dir):
            dst_dir = src_dir.replace(root_src_dir, root_dst_dir, 1)
            if not os.path.exists(dst_dir):
                os.makedirs(dst_dir)
            for file_ in files:
                src_file = os.path.join(src_dir, file_)
                dst_file = os.path.join(dst_dir, file_)
                if os.path.exists(dst_file):
                    # in case of the src and dst are the same file
                    if os.path.samefile(src_file, dst_file):
                        continue
                    os.remove(dst_file)
                shutil.copy(src_file, dst_dir)


srcStatic = r"arsoreact/build/static/"
srcHtml = r"arsoreact/build/index.html"
dstStatic = r"static/"
dstHtml = r"templates/react/base_embed.html"
brj = Buredja(srcStatic, dstStatic, srcHtml, dstHtml)
brj.execute()
