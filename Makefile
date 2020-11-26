.DEFAULT: help

.PHONY: help
## Show help
help:
	@grep -B1 -E "^[a-zA-Z0-9_-]+\:" Makefile \
     | grep -v -- -- \
     | sed 'N;s/\n/###/' \
     | sed -n 's/^#: \(.*\)###\(.*\):.*/\2###\1/p' \
     | column -t  -s '###'

.PHONY: install-vimdeck
#: Install vimdeck (and its dependencies)
install-vimdeck:
	@echo Making $@…
	sudo apt update
	sudo apt install -y ruby2.5 ruby2.5-dev imagemagick libmagickwand-dev
	gem install vimdeck

.PHONY: install
#: Install everything
install: \
	install-vimdeck
	@echo Making $@…
