paths=document.querySelectorAll('#logo path');

paths.forEach(path => {
    console.log(path.getTotalLength());
});