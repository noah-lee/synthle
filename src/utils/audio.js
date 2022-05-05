// Play (ads)
export const play = (
  ctx,
  node,
  parameter,
  min,
  max,
  attack,
  decay,
  sustain
) => {
  const now = ctx.currentTime;
  node[parameter].cancelScheduledValues(now);
  node[parameter].setValueAtTime(min, now);
  node[parameter].linearRampToValueAtTime(max, now + attack);
  node[parameter].linearRampToValueAtTime(
    min + (max - min) * sustain,
    now + attack + decay
  );
};

// Stop (r)
export const stop = (ctx, node, parameter, min, release) => {
  const now = ctx.currentTime;
  node[parameter].cancelAndHoldAtTime(now);
  node[parameter].setTargetAtTime(min, now, release / 4);
  node[parameter].setValueAtTime(min, now + release + 0.5);
};

// Impulse response for convolver node
export const createImpulseResponse = (actx, duration, decay) => {
  const rate = actx.sampleRate;
  const length = rate * decay;
  const impulse = actx.createBuffer(2, length, rate);
  const impulseL = impulse.getChannelData(0);
  const impulseR = impulse.getChannelData(1);

  for (let i = 0; i < length; i++) {
    impulseL[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, duration);
    impulseR[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, duration);
  }

  return impulse;
};
