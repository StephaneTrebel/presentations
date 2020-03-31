.DEFAULT: help

.PHONY: help
## Show help
help:
	@grep -B1 -E "^[a-zA-Z0-9_-]+\:" Makefile \
     | grep -v -- -- \
     | sed 'N;s/\n/###/' \
     | sed -n 's/^#: \(.*\)###\(.*\):.*/\2###\1/p' \
     | column -t  -s '###'

#: Clean built artifacts
.PHONY: clean
clean:
	@echo Making $@…
	rm -rf presentation

#: Compile and launch presentation
presentation: README.md
	@echo Making $@…
	vimdeck -m -M 3 ./README.md
