install:
	npm install

link:
	npm link

start:
	npx node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-even:
	npx node bin/brain-even.js

brain-games:
	node bin/brain-games.js

brain-calc:
	npx node bin/brain-calc.js

brain-gcd:
	npx node bin/brain-gcd.js

brain-progression:
	npx node bin/brain-progression.js

