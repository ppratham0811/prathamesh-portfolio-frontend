import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "mkgfcbh2",
  dataset: "portfoliodataset",
  apiVersion: "2022-08-11",
  useCdn: true,
  token: "sk902XycJelVBwOQ2Nh1B9BoIjVcWQ3bi5Zgz1aRXbd8Y3XJFBi589j5eEczkxMb8XOTcAFf8tZYr6wkOduIoB0vucLeDtIAOl7jetXmh6DQICz5j9wFDU4ieT6hQPzXi6FlIP4syo367TnJYs20Q42QdBqasFDRt6LNePAJTAFFUKATz7j3",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
