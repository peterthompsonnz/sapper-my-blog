const posts = [
	{
		title: 'Password Generator app',
		slug: 'password-generator-app',
		date: '2020/05/23',
		html: `
			<article>
			<img alt="Screenshot of password generator app" src="./password-generator/password-generator.png" />
			<p>If a password is made up of four unrelated words then it is considered to be 'unbreakable' - at the moment anyway. The trick is to remember such a password. So far I have managed a three word password as it is hard to remember words that are unrelated. Here is a link to a zip file that contains a web app that can be used to create a password made up of one to four words.</p>
			<p><a href="./password-generator/password-generator.zip">Password generator (113KiB)</a></p>
			</article>
			`
	},
	{
		title: 'Password Generator app: version 2',
		slug: 'password-generator-app-v2',
		date: '2020/05/24',
		html: `
			<article>
			<img alt="Screenshot of password generator app version 2" src="./password-generator/password-generator-v2.png">
			<p><a href="https://repl.it/@malvoliothegood/password-generator">Password Generator on repl.it</a></p>
			<p>Find attached a zip file that contains another version of the password generator app that was mentioned in the last post. It does not have a 'Copy to Clipboard' button, but generated passwords are displayed in a list.</p>
			<p>I neglected to mention in yesterday's post that two additional JS files are included in the app to implement service worker caching. This makes the app a bit more speedy after the first use as the text file that contains the words that are used to make up the generated password - it is the UNIX text file - contains 45,000+ words and weighs in at a hefty 400KiB.</p>
		<p><a href="./password-generator/password-generator-v2.zip">Password generator (151KiB)</a></p>
		</article>
			`
	},
	{
		title: 'Bug Fountain Tutorial',
		slug: 'bug-fountain-tutorial',
		date: '2020/06/03',
		html: `
			<article>
			<img alt="Screenshot of bug fountain canvas" src="./bugfountain/bugfountain.jpg">
			<p>Some time ago I made a tutorial that taught how to create a never-ending, cascading fountain of lady bugs using the HTML/CSS/JS([P5.js library](https://p5js.org/)) combo. The bugs appeared from the bottom of an HTML5 canvas, each having its own horizontal and vertical velocities and angle in the vertical direction. They were affected by gravity so moved in an arc. They always pointed in the direction of travel so turned at the top of the arc. When they reached the bottom of the canvas they repeated their travel. Hence they formed a never-ending cascade.</p>

			<p>I negligently deleted the repl on [replit](https://repl.it) that contained the starter files. Today I fixed this by creating a new repl - see links below:</p>

		<ul>
			<li><a href="https://repl.it/@malvoliothegood/bugfountain-current#index.html">Link to Bugfountain Repl</a></li>
			<li><a href="https://bugfountain-tutorial.netlify.app/">Link to tutorial website</a></li>			
		</ul>
		</article>
			`
	},
	{
		title: 'Bug Fountain Tutorial: version 2',
		slug: 'bug-fountain-tutorial-v2',
		date: '2020/06/04',
		html: `
			<article>
			<img alt="Screenshot of bug fountain canvas" src="./bugfountain/bugfountain.jpg">
			<p>Version 2 of the bug fountain program mentioned in the last post is available on [replit](https://repl.it). This version uses different sized bugs, and each bug moves at a speed relative to its size, with smaller ones moving faster than bigger ones.</p>
		<ul>
			<li><a href="https://repl.it/@malvoliothegood/bugfountain-v2#script.js">Link to Bugfountain V2 Repl</a></li>
			<li><a href="./bugfountain/bugfountain.mp4">Short video</a></li>
		</ul>
		</article>
			`
	}	
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
