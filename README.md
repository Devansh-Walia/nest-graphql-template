## Steps to perform if on windows enviornment

1. Since in windows git performs an automatic change of eol to crlf while on unix systems it keeps it to lf default, firat we'll change this config to work with both systems in the same way. Copy and run the command given blow to turn of auto-turn to crlf in windows system.

```bash
git config --global core.autocrlf false
```
