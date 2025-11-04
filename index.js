(function(window, opspark, gamelibTemp) {
  window.gamelibTemp = window.gamelibTemp || {
    numz: {
      calculateDistance(obj1, obj2) {
        return Math.sqrt((obj1.x - obj2.x) ** 2 + (obj1.y - obj2.y) ** 2);
      }
    },
    phyz: {
      /**
       * Updates a body's velocity based on applied forces and rotation.
       * @param {Object} body - The object with velocityX, velocityY, rotation.
       * @param {Number} forceOnX - Force along the X-axis.
       * @param {Number} forceOnY - Force along the Y-axis.
       */
      updateVelocity(body, forceOnX, forceOnY) {
        const angle = body.rotation * Math.PI / 180;
        const accelerationOnX = Math.cos(angle) * forceOnX;
        const accelerationOnY = Math.sin(angle) * forceOnY;

        body.velocityX += accelerationOnX;
        body.velocityY += accelerationOnY;
      },

      /**
       * Updates a body's position and rotation.
       * @param {Object} body - The object with x, y, rotation, velocityX, velocityY, rotationalVelocity.
       */
      updatePosition(body) {
        body.x += body.velocityX;
        body.y += body.velocityY;
        body.rotation += body.rotationalVelocity;
      }
    },
  };
}(window, window._));
