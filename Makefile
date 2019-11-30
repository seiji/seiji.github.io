.PHONY: new
.DEFAULT_GOAL := new


new: check_name
	@hugo new post/$$(date "+%Y-%m-%d")-${NAME}.md

check_name:
ifndef NAME
	$(error NAME is undefined)
endif

run:
	@hugo server -D

