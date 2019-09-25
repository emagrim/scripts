//VERSION=2
function evaluatePixel(samples) {
  var sample = samples[0];
  var map = sample.B02
  if (((sample.B05*sample.B06*sample.B07*sample.B08*sample.B8A)*1e5)<1||
     ((sample.B02*sample.B03*sample.B04)*(sample.B03/sample.B02+sample.B04/sample.B03)*1e5)<1){
    map = 0;
  }
  else {map = 1;}
  return {
    default: [map]
  }
}


function setup(ds) {
    return {
        components: [ds.B02, ds.B03, ds.B04, ds.B05, ds.B06, ds.B07, ds.B08, ds.B8A],
        output: [
            {
                id: "default",
                sampleType: SampleType.AUTO,
                componentCount: 1
            }
        ]
    }
}
