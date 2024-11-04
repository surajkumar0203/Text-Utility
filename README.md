<h1>About</h1>
<p>Extract Text Elements: Isolate and extract strings, numbers, and special characters from any text.</p>
<p>Convert Text: Instantly switch between uppercase and lowercase to match your formatting requirements.</p>
<p>Simple & Intuitive: Built with user-friendly design using Tailwind CSS, making it easy to navigate and utilize the tools.</p>

<h1>Set up and run code</h1>
<h2>Install Tailwind CSS</h2>
<p>Install tailwindcss via npm, and create your tailwind.config.js file.</p>
<h2>Configure your template paths</h2>
<p>Add the paths to all of your template files in your tailwind.config.js file.</p>
<h2>Add the Tailwind directives to your CSS</h2>
<p>Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.</p>
<p>add in this path src/style.css</p>
<p>@tailwind base;
@tailwind components;
@tailwind utilities;</p>
<h2>Start the Tailwind CLI build process</h2>
<p>npx tailwindcss -i ./src/style.css -o ./src/output.css --watch</p>
<h4>The node should be installed in the computer</h4>
Node version v20.11.1
