# git hooks : share hooks
==> tell git to use the .githooks folder instead of the .git/hooks folder which is not tracked
`$git config core.hooksPath .githooks`


# git commit message template
see .gitmessage


# github action : auto-pr-title
utilisation d'une custom github action de manière non traditionnelle : l'action en question (présente [ICI](https://github.com/GabB40/git-custom-action)) n'a pas été publiée sur le market place
--> au lieu de ça, utilisation du fichier index.js qui a été buildé (dist/index.js) dans .github/actions/auto-pr-title

Ceci dans le but de ne pas utiliser d'actions du market place et/ou de ne pas devoir plublier ces actions
--> certainement mieux à faire surtout depuis une nouvelle fonctionnalité sur le suejt implémentée par github

*_[EDIT]_ je vais tenter un fork de ce repo (gitDemoPrivate), le faire passer en private et tenter d'appeler mon action qui est elle aussi dans un repo private*
