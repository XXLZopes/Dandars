self.onmessage = function(event) {
    const { id, scrollY, speedAdjuster } = event.data;
    const offset = scrollY / speedAdjuster;
    self.postMessage({
        id: id,
        offset: offset
    });
};
