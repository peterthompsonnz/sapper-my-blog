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
		title: 'Bug Fountain: version 2',
		slug: 'bug-fountain-v2',
		date: '2020/06/04',
		html: `
			<article>
			<img alt="Screenshot of bug fountain canvas" src="./bugfountain/bugfountain.jpg">
			<p>Version 2 of the bug fountain program mentioned in the last post is available on <a href="https://repl.it">replit</a>. This version uses different sized bugs, and each bug moves at a speed relative to its size, with smaller ones moving faster than bigger ones.</p>
		<ul>
			<li><a href="https://repl.it/@malvoliothegood/bugfountain-v2#script.js">Link to Bugfountain V2 Repl</a></li>
			<li><a href="./bugfountain/bugfountain.mp4">Short video</a></li>
		</ul>
		</article>
			`
	},
	{
		title: 'Click the banana game',
		slug: 'click-the-banana-game',
		date: '2020/06/21',
		html: `
			<article>
			<img alt="Screenshot of click the banana game" src="./banana-game/screenshot.png">
			<p>This game is written using vanilla JavaScript and the HTML5 canvas and some of its methods. Bananas fall from the top of the playing area. Every time the player clicks on one they: get a point, the banana's position is reset to a random x position at the top of the canvas, and its falling speed is increased slightly. Also, after every fifth click a new banana is added to the game.</p><p>The current score is displayed at top left, along with the 'best ever' score. This is stored in the browser's local storage. The player has three lives to start with. The current number is indicated by the number of images of a monkey at the top right of the canvas. As a final touch the standard cursor is replaced by an image of a small monkey (a smaller version of the one used to show lives).</p>
			<ul>
			<li><a href="https://repl.it/@malvoliothegood/Click-the-banana-game#index.html">Link to Repl</a></li>
			<li><a href="./banana-game/banana-game.zip">Zipped up game files (11.3KiB)</a></li>
		</ul>		
		</article>
			`
	},
	{
		title: 'Collatz conjecture app',
		slug: 'collatz-conjecture-app',
		date: '2020/06/25',
		html: `
			<article>
			<img alt="Screenshot of Collatz conjecture app" src="./collatz-conjecture/screenshot.png">
			<p>This is a forked and heavily modified version of an app that help was requested for on Repl.it. It deals with the <a href="https://en.wikipedia.org/wiki/Collatz_conjecture">Collatz conjecture</a>.</p>
			<ul>
			<li><a href="https://repl.it/@malvoliothegood/Collatx-conjucture#index.html">Link to Repl</a></li>
			<li><a href="./collatz-conjecture/collatz-conjecture.zip">Zipped up app files (2.2KiB)</a></li>
		</ul>		
		</article>
			`
	},
	{
		title: 'Collatz conjecture app: version 2',
		slug: 'collatz-conjecture-app-v2',
		date: '2020/06/26',
		html: `
			<article>			
			<p>This is an improved version of the Collatz conjecture app mentioned in the last post. The output of the number sequence is better formatted (there is a comma and a space between each number) and there is a 100 millisecond delay between each iteration of the sequence generating algorithm. This adds interest. A link to a video of the running app is included below.</p>
			<ul>
			<li><a href="https://repl.it/@malvoliothegood/Collatz-conjecture-v2">Link to Repl</a></li>
			<li><a href="./collatz-conjecture/collatz-conjecture-v2.zip">Zipped up app files (2.3KiB)</a></li>
			<li><a href="./collatz-conjecture/collatz-conjecture.mp4">Short video of the app in action</a></li>
		</ul>		
		</article>
			`
	},
	{
		title: 'Collatz conjecture app: version 2b',
		slug: 'collatz-conjecture-app-v2b',
		date: '2020/06/27',
		html: `
			<article>			
			<p>It's amazing how you can think you have ironed out all bugs only to find one hiding in plain sight. This is the case with V2 of the Collatz conjecture app. It accepts negative numbers! Version V2b does not. It also uses a textarea to display the results. As the height and width of the textarea is set no rejigging of the page layout occurs. This looks better.</p>
			<ul>
			<li><a href="https://repl.it/@malvoliothegood/Collatz-conjecture-v2b">Link to Repl</a></li>
			<li><a href="./collatz-conjecture/collatz-conjecture-v2b.zip">Zipped up app files (2.3KiB)</a></li>
			</ul>		
		</article>
			`
	},
	{
		title: "B & C 'Hello Worlds'",
		slug: 'hello-world',
		date: '2020/06/29',
		html: `
			<article>
			<img alt="hello, world C and B code" src="./hello-world/screenshot.png">
			<p>Above is a screenshot of some C and B language code that prints out <strong>hello, world</strong>. Note the lowercase wording, the comma and the dates. Modern versions of the text part of the program often capitalise the two words and miss out the comma. Below are links to a Wikipedia article on the history of the 'Hello World' programs along with a link to a downloadable copy of the original C language book.</p>
			<ul>
			<li><a href="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program">Wikipedia article</a></li>
			<li><a href="./hello-world/The C Programming Language Ritchie & Kernighan.pdf">The C Programming Language by Kernighan and Richie (PDF, 1.2Mib)</a></li>
			</ul>		
		</article>
			`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
