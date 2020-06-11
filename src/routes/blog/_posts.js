// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'Password Generator app',
		slug: 'password-generator-app',
		date: '2020/05/23',
		html: `
			<img alt="Screenshot of password generator app" src="./password-generator/password-generator.png" />
			<p>If a password is made up of four unrelated words then it is considered to be 'unbreakable' - at the moment anyway. The trick is to remember such a password. So far I have managed a three word password as it is hard to remember words that are unrelated. Here is a link to a zip file that contains a web app that can be used to create a password made up of one to four words.</p>
			<p><a href="./password-generator/password-generator.zip">Password generator (113KiB)</a></p>
			`
	}

	
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
