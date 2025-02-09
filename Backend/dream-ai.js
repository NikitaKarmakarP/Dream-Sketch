function interpretDream(dreamText) {
  // Basic dream elements mapping
  const objects = [];
  const words = dreamText.split(' ');

  words.forEach((word, index) => {
    objects.push({
      x: Math.random() * 10 - 5,
      y: Math.random() * 10 - 5,
      z: Math.random() * 10 - 5,
      size: Math.random() * 1 + 0.5,
      color: word.length > 3 ? '#FF5733' : '#3498DB',
    });
  });

  return { objects };
}

module.exports = { interpretDream };
