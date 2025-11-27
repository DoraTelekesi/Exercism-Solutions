premium(text, minimumQuality) {
  return this.api
    .fetch(text)
    .then((value) => {
      if (value.quality > minimumQuality) {
        return value.translation;
      }
      throw new QualityThresholdNotMet(text);
    })
    .catch((e) => {
      if (e instanceof QualityThresholdNotMet) {
        throw e;
      }
      return this.request(text)
        .then(() => this.api.fetch(text))
        .then((value) => {
          if (value.quality > minimumQuality) {
            return value.translation;
          }
          throw new QualityThresholdNotMet(text);
        });
    });
}