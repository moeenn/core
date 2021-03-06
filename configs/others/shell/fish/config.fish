# settings
set --erase fish_greeting

# fedora package management
abbr -a update 'sudo apt-get update'
abbr -a search 'apt-cache search'
abbr -a install 'sudo apt-get install -y'
abbr -a remove 'sudo apt-get remove'
abbr -a upgrade 'sudo apt-get upgrade'
abbr -a autoremove 'sudo apt-get autoremove'

# Operations
abbr -a c 'clear'
abbr -a cp 'cp -vrf'
abbr -a mv 'mv -ivf'
abbr -a rm 'rm -iv'
abbr -a link 'ln -s -r'
abbr -a :q 'exit'
abbr -a dir 'tree -d'

# Programs
abbr -a load 'htop -u moeenn'
abbr -a df 'dfc -f -s'
abbr -a uptime 'uptime -p'
abbr -a get 'axel -n 4'
abbr -a extract 'dtrx -v'
abbr -a m 'mpv'
abbr -a cf 'cfiles'
abbr -a ydl 'youtube-dl --external-downloader axel'
abbr -a net 'bwm-ng -t 1000'

# Super User Tasks
abbr -a poweroff 'sudo poweroff'
abbr -a reboot 'sudo reboot'
abbr -a kill 'killall -v --ignore-case'
abbr -a full_access 'sudo chmod -R a+rw'

# Git
# Before you can use this command you need to do: git remote add upstream git+ssh://git@github.com/moeenn/repo
abbr -a upstream 'git remote add upstream'
abbr -a status 'git status'
abbr -a pull 'git pull origin master --allow-unrelated-histories'
abbr -a commit 'git commit -m "bugfixes"'
abbr -a push 'git push origin master'
abbr -a clone 'git clone'

# programming
abbr -a py 'python3'
#abbr -a test 'pytest -v'
#abbr -a test_all 'py.test -v'
