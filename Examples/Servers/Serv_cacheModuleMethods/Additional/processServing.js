process.on('warning', warning => {
    console.dir(warning);
    process.exit(0);
});