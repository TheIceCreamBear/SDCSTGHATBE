import React, { useState, useEffect } from 'react';

export default function App(): React.ReactElement {
    const [file, setFile] = useState<string>("");

    async function loadResource() {
        const file = window.filesys.readSync('concurrency', 'main.c');
        console.log(file.toString());
        setFile(file);
        console.log(file);
    }

    useEffect(() => {
        loadResource();
    }, []);

    return (
        <div>
            <h1>This is a heading</h1>
            {file}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis sem in rutrum porta. Vestibulum mauris nisi, ultricies a dui eget, convallis commodo felis. Suspendisse nisi nibh, semper sit amet odio quis, condimentum facilisis ante. Sed interdum mauris id nisi euismod iaculis. Sed fermentum tellus vitae lectus posuere ornare. Etiam viverra metus erat. Cras venenatis lacinia finibus. Sed porta ut erat eget eleifend. Nam pretium id augue vitae commodo. Fusce ullamcorper felis vitae dui dignissim, quis tempor purus commodo. Phasellus felis ex, porta ac ligula non, vulputate commodo quam. Donec non eros lacus. Mauris posuere vestibulum turpis, nec tincidunt augue consequat ut. Praesent eget quam mollis, dapibus orci vel, tristique felis. Sed nec urna ligula. Vestibulum eu ornare dolor, in ornare nunc.
            </p>
        </div>
    )
}