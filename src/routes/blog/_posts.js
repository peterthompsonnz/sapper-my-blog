const posts = [
  {
    title: "Password Generator app",
    slug: "password-generator-app",
    date: "2020/05/23",
    html: `
			<article>
			<img alt="Screenshot of password generator app" src="./password-generator/password-generator.png" />
			<p>If a password is made up of four unrelated words then it is considered to be 'unbreakable' - at the moment anyway. The trick is to remember such a password. So far I have managed a three word password as it is hard to remember words that are unrelated. Here is a link to a zip file that contains a web app that can be used to create a password made up of one to four words.</p>
			<p><a href="./password-generator/password-generator.zip">Password generator (113KiB)</a></p>
			</article>
			`,
  },
  {
    title: "Password Generator app: version 2",
    slug: "password-generator-app-v2",
    date: "2020/05/24",
    html: `
			<article>
			<img alt="Screenshot of password generator app version 2" src="./password-generator/password-generator-v2.png">
			<p>Find attached a zip file that contains another version of the password generator app that was mentioned in the last post. It does not have a 'Copy to Clipboard' button, but generated passwords are displayed in a list.</p>
			<p>I neglected to mention in yesterday's post that two additional JS files are included in the app to implement service worker caching. This makes the app a bit more speedy after the first use as the text file that contains the words that are used to make up the generated password - it is the UNIX text file - contains 45,000+ words and weighs in at a hefty 400KiB.</p>
      <ul>
      <li><a href="https://happyduckiesdemos.netlify.app/password-generator/" target="_blank" rel="noreferrer nofollow noopener">Demo</a></li>
      <li><a href="./password-generator/password-generator-v2.zip">Password generator (151KiB)</a></li>
      </ul>
		</article>
			`,
  },
  {
    title: "Bug Fountain Tutorial",
    slug: "bug-fountain-tutorial",
    date: "2020/06/03",
    html: `
			<article>
			<img alt="Screenshot of bug fountain canvas" src="./bugfountain/bugfountain.jpg">
			<p>Some time ago I made a tutorial that taught how to create a never-ending, cascading fountain of lady bugs using the HTML/CSS/JS([P5.js library](https://p5js.org/)) combo. The bugs appeared from the bottom of an HTML5 canvas, each having its own horizontal and vertical velocities and angle in the vertical direction. They were affected by gravity so moved in an arc. They always pointed in the direction of travel so turned at the top of the arc. When they reached the bottom of the canvas they repeated their travel. Hence they formed a never-ending cascade.</p>

			<p>I negligently deleted the repl on [replit](https://repl.it) that contained the starter files. Today I fixed this by creating a new repl - see links below:</p>

		<ul>
			<li><a href="https://happyduckiesdemos.netlify.app/bugfountain/" target="_blank" rel="noreferrer nofollow noopener">Demo</a></li>
			<li><a href="https://bugfountain-tutorial.netlify.app/">Link to tutorial website</a></li>
		</ul>
		</article>
			`,
  },
  {
    title: "Bug Fountain: version 2",
    slug: "bug-fountain-v2",
    date: "2020/06/04",
    html: `
			<article>
			<img alt="Screenshot of bug fountain canvas" src="./bugfountain/bugfountain.jpg">
			<p>Version 2 of the bug fountain program mentioned in the last post is available on <a href="https://repl.it">replit</a>. This version uses different sized bugs, and each bug moves at a speed relative to its size, with smaller ones moving faster than bigger ones.</p>
		<ul>
			<li><a href="https://happyduckiesdemos.netlify.app/bugfountain-v2/" target="_blank" rel="noreferrer nofollow noopener">Demo</a></li>
			<li><a href="./bugfountain/bugfountain.mp4">Short video</a></li>
		</ul>
		</article>
			`,
  },
  {
    title: "Click the banana game",
    slug: "click-the-banana-game",
    date: "2020/06/21",
    html: `
			<article>
			<img alt="Screenshot of click the banana game" src="./banana-game/screenshot.png">
			<p>This game is written using vanilla JavaScript and the HTML5 canvas and some of its methods. Bananas fall from the top of the playing area. Every time the player clicks on one they: get a point, the banana's position is reset to a random x position at the top of the canvas, and its falling speed is increased slightly. Also, after every fifth click a new banana is added to the game.</p><p>The current score is displayed at top left, along with the 'best ever' score. This is stored in the browser's local storage. The player has three lives to start with. The current number is indicated by the number of images of a monkey at the top right of the canvas. As a final touch the standard cursor is replaced by an image of a small monkey (a smaller version of the one used to show lives).</p>
			<ul>
			<li><a href="https://happyduckiesdemos.netlify.app/click-the-banana-game/" target="_blank" rel="noreferrer nofollow noopener">Demo</a></li>
			<li><a href="./banana-game/banana-game.zip">Zipped up game files (11.3KiB)</a></li>
		</ul>
		</article>
			`,
  },
  {
    title: "Collatz conjecture app",
    slug: "collatz-conjecture-app",
    date: "2020/06/25",
    html: `
			<article>
			<img alt="Screenshot of Collatz conjecture app" src="./collatz-conjecture/screenshot.png">
			<p>This is a forked and heavily modified version of an app that help was requested for on Repl.it. It deals with the <a href="https://en.wikipedia.org/wiki/Collatz_conjecture">Collatz conjecture</a>.</p>
			<ul>
			<li><a href="https://happyduckiesdemos.netlify.app/collatx-conjucture/" target="_blank" rel="noreferrer nofollow noopener">Demo</a></li>
			<li><a href="./collatz-conjecture/collatz-conjecture.zip">Zipped up app files (2.2KiB)</a></li>
		</ul>
		</article>
			`,
  },
  {
    title: "Collatz conjecture app: version 2",
    slug: "collatz-conjecture-app-v2",
    date: "2020/06/26",
    html: `
			<article>
			<p>This is an improved version of the Collatz conjecture app mentioned in the last post. The output of the number sequence is better formatted (there is a comma and a space between each number) and there is a 100 millisecond delay between each iteration of the sequence generating algorithm. This adds interest. A link to a video of the running app is included below.</p>
			<ul>
			<li><a href="https://happyduckiesdemos.netlify.app/collatz-conjecture-v2/" target="_blank" rel="noreferrer nofollow noopener">Demo</a></li>
			<li><a href="./collatz-conjecture/collatz-conjecture-v2.zip">Zipped up app files (2.3KiB)</a></li>
			<li><a href="./collatz-conjecture/collatz-conjecture.mp4">Short video of the app in action</a></li>
		</ul>
		</article>
			`,
  },
  {
    title: "Collatz conjecture app: version 2b",
    slug: "collatz-conjecture-app-v2b",
    date: "2020/06/27",
    html: `
			<article>
			<p>It's amazing how you can think you have ironed out all bugs only to find one hiding in plain sight. This is the case with V2 of the Collatz conjecture app. It accepts negative numbers! Version V2b does not. It also uses a textarea to display the results. As the height and width of the textarea is set no rejigging of the page layout occurs. This looks better.</p>
			<ul>
			<li><a href="https://happyduckiesdemos.netlify.app/collatz-conjecture-v2b/" target="_blank" rel="noreferrer nofollow noopener">Demo</a></li>
			<li><a href="./collatz-conjecture/collatz-conjecture-v2b.zip">Zipped up app files (2.3KiB)</a></li>
			</ul>
		</article>
			`,
  },
  {
    title: "B & C 'Hello Worlds'",
    slug: "hello-world",
    date: "2020/06/29",
    html: `
			<article>
			<img alt="hello, world C and B code" src="./hello-world/screenshot.png">
			<p>Above is a screenshot of some C and B language code that prints out <strong>hello, world</strong>. Note the lowercase wording, the comma and the dates. Modern versions of the text part of the program often capitalise the two words and miss out the comma. Below are links to a Wikipedia article on the history of the 'Hello World' programs along with a link to a downloadable copy of the original C language book.</p>
			<ul>
			<li><a href="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program">Wikipedia article</a></li>
			<li><a href="./hello-world/The C Programming Language Ritchie & Kernighan.pdf">The C Programming Language by Kernighan and Richie (PDF, 1.2Mib)</a></li>
			</ul>
		</article>
			`,
  },
  {
    title: "Loading images using promises",
    slug: "loading-images-using-promises",
    date: "2020/06/31",
    html: `
			<article>
      <img alt="Loading images using promises results page" src="./loading-images-using-promises/screenshot.jpg">
			<img alt="Loading images using promises code screenshot" src="./loading-images-using-promises/screenshot.png">
			<p>Loading a number of images for a web page can be problematic if the image loading has to occur before other code runs. The above JS code shows how it can be done using Promises (Promise and Promise.all). The images will not be added to the page until all images have been fetched. The attached zip file contains the web page and its associated code.</p>
			<ul>
      <li><a href="https://happyduckiesdemos.netlify.app/loading-images-using-promises/" target="_blank" rel="noreferrer nofollow noopener">Demo</a></li>
			<li><a href="./loading-images-using-promises/loading-images-using-promises.zip">App code (zip, 1.2KiB)</a></li>
			</ul>

		</article>
			`,
  },
  {
    title: "Hangman animal game using Snowpack",
    slug: "hangman-game-using-snowpack",
    date: "2020/07/02",
    html: `
			<article>
      <img alt="screenshot of hangman game in action" src="./snowpack-hangman-game/screenshot.png">
      <p>This simple game was built using the Svelte framework and the <a href="https://www.snowpack.dev/">Snowpack build chain tool</a>. Snowpack is unique as it does not bundle on every file change, save and rebuild. This means that the effects of changes are seen very quickly in a running instance of an app. See the quoted text below from the Snowpack homepage for more information.</p>
      <p>To replicate the hangman development project folder and file structure:</p>
      <ol>
      <li>Download the zip file attached to this post</li>
      <li>Unzip it in an appropriate place in your system's file structure</li>
      <li>Open a terminal within the root level of the project's file structure</li>
      <li>Install dependencies by running <code>npm install</code> in the terminal</li>
      <li>Then run <code>npm run start</code> to start the app</li>
      <li>A webserver will start automatically and the default browser will start and load the app's main page at <code>localhost:8080</code></li>
      <li>Edit the <strong>Svelte</strong> files as you see fit. Hot reloading will keep the running app up to date</li>
      <li>To build the app run <code>npm run build</code>. The built files will be in the <code>build</code> folder</li>
      </ol>
      <blockquote>
      <h2>What is Snowpack?</h2>
      <p>Snowpack is a modern, lightweight toolchain for web application development. Traditional dev bundlers like webpack or Parcel need to rebuild & rebundle entire chunks of your application every time you save a single file. This introduces lag between changing a file and seeing those changes reflected in the browser, sometimes as slow as several seconds.</p>
      <p>Snowpack solves this problem by serving your application unbundled in development. Any time you change a file, Snowpack never rebuilds more than a single file. There’s no bundling to speak of, just a few milliseconds of single-file rebuilding and then an instant update in the browser via HMR. We call this new approach O(1) Build Tooling. </p>
      </blockquote>
			<ul>
      <li><a href="https://happyduckiesdemos.netlify.app/hangman-game/" target="_blank" rel="noreferrer nofollow noopener">Demo</a></li>
			<li><a href="./snowpack-hangman-game/snowpack-hangman-game.zip">App development project folders and files  (zip, 221KiB)</a></li>
			</ul>

		</article>
			`,
  },
  {
    title: "Tic Tac Toe game using Svelte",
    slug: "tictactoe-game-using-svelte",
    date: "2020/07/04",
    html: `
			<article>
      <img alt="screenshot of tic tac toe game in action" src="./tic-tac-toe/screenshot.png">
      <p style="font-size: 1.15em;font-weight: 600;margin-top: -1em;margin-bottom: 1.5em;">Game in action</p>
      <img alt="screenshot of Board.svelte file code" src="./tic-tac-toe/board-code.png">
      <p style="font-size: 1.15em;font-weight: 600;margin-top: -1em;margin-bottom: 1.5em;">Board.svelte code</p>

      <p>This game was built using the Svelte framework. The main logic in the program is in the Board.svetle file - see above. Note the reactive statements on lines 20 to 29. Anytime the value of a variable within these code blocks changes the code will be reavaluated. The zip file below can be downloaded and the project can be rebuilt by following the steps below - it is assumed that you have got <strong>node/npm</strong> installed.</p>
			<ol>
      <li>Unzip the zip file in an appropriate place in your file system</li>
      <li>Open a terminal within the project's root folder and run <code>npm install</code> to install dependences
      <li>Run <code>npm run dev</code> to compile the project code and crank up a web server that listens on <code>localhost:5000</code></li>
      <li>Open a browser and go to this address</li>
      <li>Run <code>npm run build</code> to build a website version of the app within the <strong>public</strong> folder. This can be hosted on <a href="https://app.netlify.com" target="_blank" rel="noreferrer nofollow noopener">Netlify</a> for free using <a href="https://app.netlify.com/drop" target="_blank" rel="noreferrer nofollow noopener">Netlify Drop</a>
			</ol>
      <ul>

			<li><a href="./tic-tac-toe/tic-tac-toe.zip">App development project folders and files  (zip, 14.6KiB)</a></li>
      </ul>

		</article>
			`,
  },
  {
    title: "Breaking Bad Characters using Svelte",
    slug: "breaking-bad-characters-using-svelte",
    date: "2020/07/08",
    html: `
			<article>
	  <img alt="screenshot of breaking in action" src="./breaking-bad-characters/screenshot.jpg">
	  <p style="font-size: 1.15em;font-weight: 600;margin-top: -1em;margin-bottom: 1.5em;">App in action</p>
	  <p><a href="https://www.youtube.com/watch?v=YaioUnMw0mo" target="_blank" rel="noreferrer nofollow noopener">Brad's video tutorial</a></p>

	  <p>Recently <strong>Brad Traversy</strong> made a video on his YouTube chanel that showed how to make an app using React that would display images of the characters in the Breaking Bad TV series. There was a search box that could be used to filter results on the characters names. Also there was a cool card flip effect on mouse over that would turn an image 180 degrees so the back came into view, displaying information on the character. I built the app using React as per instructions in the video and then built it in Svelte. Both builds went smoothly except for the filter/search feature where I had to use <code>on:input</code> rather than <code>on:change</code> for the event listener on the text <code>input</code> control as <code>on:change</code> would only fire on an <code>onblur</code> event i.e. when attention left the text control. Look in the <code>Search.svelte</code> file in the repo to see this. According to MDN this behaviour is a feature of text boxes.
	  </p>
	  <p>There is a link below to a GitHub repository that can be cloned. There is also a link to a demo app</p>
      <ul>
      <li><a href="https://happyduckiesdemos.netlify.app/breaking-bad-characters/" target="_blank" rel="noreferrer nofollow noopener">Demo</a></li>
			<li><a href="https://github.com/peterthompsonnz/svelte-breaking-bad-characters" target="_blank" rel="noreferrer nofollow noopener">Link to GitHub repository</a></li>
      </ul>

		</article>
			`,
  },
  {
    title: "Tic Tac Toe game using Svelte: version 4",
    slug: "tictactoe-game-using-svelte-v4",
    date: "2020/07/23",
    html: `
			<article>
	  <img alt="screenshot of tic tac toby in action" src="./tic-tac-toe-v4/screenshot.png">
    <p style="font-size: 1.15em;font-weight: 600;margin-top: -1em;margin-bottom: 1.5em;">App in action</p>
    <img alt="screenshot of script code" src="./tic-tac-toe-v4/script.png">
    <p style="font-size: 1.15em;font-weight: 600;margin-top: -1em;margin-bottom: 1.5em;">JS code</p>
    <img alt="screenshot of html code" src="./tic-tac-toe-v4/html.png">
    <p style="font-size: 1.15em;font-weight: 600;margin-top: -1em;margin-bottom: 1.5em;">HTML code</p>
    <img alt="screenshot of style code" src="./tic-tac-toe-v4/style.png">
    <p style="font-size: 1.15em;font-weight: 600;margin-top: -1em;margin-bottom: 1.5em;">Style code</p>
    <p>
	    This is an improved version of the Tic Tac Toe game mentioned in a previous post. It was made for my grandson Toby, hence the title of the game, "Tic Tac Toby", and the use of a firetruck and a plane emoji in place of the 'X' and 'O' characters. It is version 4 rather than version 2 (of the original game) because I made a few silly mistakes when adding Service Worker support (I forgot to cache the SW files!). I also played around (a lot) with the CSS that sized the emojis, as, although I was applying the same class to them in two places, I could not get them to display at the same size. I finally admitted defeat and overcame the issue by altering the HTML that encompassed the emojis so it was the same. V4 of the game also has a 'New Game' button and it keeps score.
	  <p>
	  <p>Here is a link to the first game's post that details how the zip file linked to below can be unpacked and the project rebuilt the: <a href="https://happyduckies.netlify.app/blog/tictactoe-game-using-svelte">Post containing instructions</a>
	  </p>
      <ul>
      <li><a href="https://happyduckiesdemos.netlify.app/tic-tac-toe/" target="_blank" rel="noreferrer nofollow noopener">Demo</a></li>
			<li><a href="./tic-tac-toe-v4/tic-tac-toe-v4.zip">App development project folders and files  (zip, 46.2KiB)</li>
      </ul>
		</article>
			`,
  },
  {
    title: "Simple Tic Tac Toe game using Svelte",
    slug: "simple-tictactoe-game-using-svelte",
    date: "2020/07/24",
    html: `
			<article>
	  <img alt="screenshot of simple tic tac in action" src="./simple-tic-tac-toe/simple-tic-tac-toe.png">
    <p style="font-size: 1.15em;font-weight: 600;margin-top: -1em;margin-bottom: 1.5em;">App in action</p>   
    <p>
	    This is a simple version of Tic Tac Toe. There is no checking for a win, a tie or who's turn it is. Also, images rather than emojis are used.
	  <p>	  
      <ul>
      <li><a href="https://happyduckiesdemos.netlify.app/simple-tic-tac-toe/" target="_blank" rel="noreferrer nofollow noopener">Demo</a></li>
			<li><a href="https://svelte.dev/repl/18fff756a9ce445fa72fa1229ec2fcc6?version=3.24.0">Svelte Repl version</li>
      </ul>
		</article>
			`,
  }
];

posts.forEach((post) => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
