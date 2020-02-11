echo "Start :: D:\Node_Projects v.2\Node_Docs\node_modules\st_doc1\Knowledge\PowerShell\Shell_init\set_alias.ps1"

# Aliases -----------------------------------------------------------------------

function Start-NotePad { & notepad $args }
Set-Alias -Name np -Value Start-NotePad -Force -Option AllScope

function Get-GitStatus { & git status $args }
Set-Alias -Name gs -Value Get-GitStatus -Force -Option AllScope

<# [alias]
	gr = log --pretty=format:\"%h %s\" --graph
	ch = checkout
	br = branch
	st = status
	co = commit
	reh = reset HEAD  #>