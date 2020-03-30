.DEFAULT: help

.PHONY: help
## Show help
help:
	@grep -B1 -E "^[a-zA-Z0-9_-]+\:" Makefile \
     | grep -v -- -- \
     | sed 'N;s/\n/###/' \
     | sed -n 's/^#: \(.*\)###\(.*\):.*/\2###\1/p' \
     | column -t  -s '###'

.PHONY: mono-vs-multirepos
#: Compile and launch presentation
mono-vs-multirepos:
	@echo Making $@…
	vimdeck -m -M 3 ./main.md
