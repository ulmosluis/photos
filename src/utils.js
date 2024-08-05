export function getImageUrl(person) {
  return (
    './photos/' +
    person.imageId +
    '.jpg'
  );
}