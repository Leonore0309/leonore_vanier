"""Copie le site dans le dépôt de la compagnie (dossier leonore_vanier/).

Usage (depuis la racine du dépôt) :  python tools/publish_cie.py <chemin du clone de ACO-LV/Cie-Site-web>

Ce dépôt reste la version de référence : le dossier de destination est remplacé à chaque copie, sauf le
fichier de vérification Google qui s'y trouve. Seuls les fichiers suivis par git sont copiés, donc jamais
sources/ ni AMELIORATIONS.md. Le script ne fait ni commit ni push.
"""
import fnmatch, os, shutil, subprocess, sys

FOLDER = "leonore_vanier"
# Fichiers du dépôt qui ne font pas partie du site publié
SKIP_DIRS = (".claude/", "tools/")
SKIP_FILES = (".gitignore", ".nojekyll", "404.html", "README.md")
SKIP_PATTERN = "googled*.html"
KEEP_PATTERN = "google*.html"


def site_files(repo):
    out = subprocess.check_output(["git", "-C", repo, "ls-files", "-z"])
    files = [f for f in out.decode("utf-8").split("\0") if f]
    return [f for f in files
            if not f.startswith(SKIP_DIRS) and f not in SKIP_FILES and not fnmatch.fnmatch(f, SKIP_PATTERN)]


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    repo = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    clone = os.path.abspath(sys.argv[1])
    if not os.path.isfile(os.path.join(clone, "presentation.html")) or not os.path.isfile(os.path.join(clone, "CNAME")):
        sys.exit("Ce dossier n'est pas un clone du site de la compagnie : " + clone)
    dest = os.path.join(clone, FOLDER)

    kept = {}
    if os.path.isdir(dest):
        for name in os.listdir(dest):
            if fnmatch.fnmatch(name, KEEP_PATTERN):
                with open(os.path.join(dest, name), "rb") as f:
                    kept[name] = f.read()
        shutil.rmtree(dest)

    files = site_files(repo)
    for f in files:
        target = os.path.join(dest, *f.split("/"))
        os.makedirs(os.path.dirname(target), exist_ok=True)
        shutil.copyfile(os.path.join(repo, *f.split("/")), target)
    for name, data in kept.items():
        with open(os.path.join(dest, name), "wb") as f:
            f.write(data)
    print(len(files), "fichiers copiés dans", dest)


if __name__ == "__main__":
    main()
