import Image from "next/image";

export default function Home() {
  return (
    <div
      className="w-screen pt-30 sm:pb-0 pb-96"
      style={{
        background: "radial-gradient(circle at 10% 30%, #032452 20%, #0b102a 100%, #1e40af 100%)",
      }}
    >
      <div className="h-200 sm:h-100 p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Demo Page</h1>
        <p className="mb-2">
          This is a sample page filled with lots of placeholder text to demonstrate the layout and styling of the application. You can use this area to showcase your content, features, or anything else you'd like to highlight.
        </p>
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <p className="mb-2">
          Vivamus suscipit, tortor nec pulvinar varius, urna erat dictum erat, nec dictum ex enim nec urna. Etiam euismod, justo at facilisis cursus, enim erat dictum urna, nec dictum ex enim nec urna.
        </p>
        <p>
          Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est.
        </p>
      </div>
      <div className="h-200 p-8 text-white">
        <h2 className="text-2xl font-semibold mb-4">More Information</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Feature one: Easy to use and customize</li>
          <li>Feature two: Responsive design for all devices</li>
          <li>Feature three: Built with Next.js and Tailwind CSS</li>
          <li>Feature four: Fast and efficient performance</li>
        </ul>
        <p>
          Suspendisse potenti. Nullam ac erat ante. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <p>
          Thank you for visiting this demo page. Feel free to explore and modify the content as needed!
        </p>
      </div>
    </div>
  );
}
