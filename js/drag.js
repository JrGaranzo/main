document.addEventListener("DOMContentLoaded", function() {
    const serviceContainers = document.querySelectorAll(".service-container-a");

    serviceContainers.forEach(container => {
        container.addEventListener("mousedown", startDragging);
    });

    let currentDrag;

    function startDragging(event) {
        currentDrag = this;
        const initialX = event.pageX - currentDrag.getBoundingClientRect().left;
        const initialY = event.pageY - currentDrag.getBoundingClientRect().top;

        document.addEventListener("mousemove", handleDrag);
        document.addEventListener("mouseup", stopDragging);

        function handleDrag(event) {
            const newX = event.pageX - initialX;
            const newY = event.pageY - initialY;

            currentDrag.style.transform = `translate(${newX}px, ${newY}px)`;
        }

        function stopDragging() {
            document.removeEventListener("mousemove", handleDrag);
            document.removeEventListener("mouseup", stopDragging);
        }
    }
});