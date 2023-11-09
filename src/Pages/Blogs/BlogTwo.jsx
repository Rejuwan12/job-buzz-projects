import blogss2 from "../../../images/blogs2.jpg";

const BlogTwo = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-xl font-medium">
          What is Nest JS and Express JS?
        </div>
        <div className="collapse-content">
          <h2 className="font-bold">Introduction</h2>
          <p>
            Nest (NestJS) is a framework for building efficient, scalable
            Node.js server-side applications. It uses progressive JavaScript, is
            built with and fully supports TypeScript (yet still enables
            developers to code in pure JavaScript) and combines elements of OOP
            (Object Oriented Programming), FP (Functional Programming), and FRP
            (Functional Reactive Programming). Under the hood, Nest makes use of
            robust HTTP Server frameworks like Express (the default) and
            optionally can be configured to use Fastify as well! Nest provides a
            level of abstraction above these common Node.js frameworks
            (Express/Fastify), but also exposes their APIs directly to the
            developer. This gives developers the freedom to use the myriad of
            third-party modules which are available for the underlying platform.
          </p>

          <h2 className="font-bold">Philosophy</h2>
          <p>
            In recent years, thanks to Node.js, JavaScript has become the
            “lingua franca” of the web for both front and backend applications.
            This has given rise to awesome projects like Angular, React and Vue,
            which improve developer productivity and enable the creation of
            fast, testable, and extensible frontend applications. However, while
            plenty of superb libraries, helpers, and tools exist for Node (and
            server-side JavaScript), none of them effectively solve the main
            problem of - Architecture. Nest provides an out-of-the-box
            application architecture which allows developers and teams to create
            highly testable, scalable, loosely coupled, and easily maintainable
            applications. The architecture is heavily inspired by Angular
          </p>
          <h2 className="font-bold">Installation</h2>
          <p>
            To get started, you can either scaffold the project with the Nest
            CLI, or clone a starter project (both will produce the same
            outcome). To scaffold the project with the Nest CLI, run the
            following commands. This will create a new project directory, and
            populate the directory with the initial core Nest files and
            supporting modules, creating a conventional base structure for your
            project. Creating a new project with the Nest CLI is recommended for
            first-time users. We'll continue with this approach in First Steps.
          </p>
          <img src={blogss2} alt="" />

          <h2 className=" text-2xl font-bold mt-4">Express JS</h2>
          <p>
            Express.js, commonly referred to as Express, is a minimal and
            flexible web application framework for Node.js. It is one of the
            most popular and widely used frameworks for building web
            applications and APIs in the Node.js ecosystem. Express provides a
            set of features and tools for building web servers, handling HTTP
            requests and responses, and routing. Key features and concepts of
            Express.js include:{" "}
          </p>
        <h2 className="font-bold">Routing:</h2>
          <p>
             Express allows you to define routes for handling HTTP
            requests. You can specify how different URLs or HTTP methods should
            be processed, making it easy to create RESTful APIs and web
            applications.
          </p>
            <h2 className="font-bold">Middleware:</h2>
          <p>
             Middleware functions are at the core of Express.
            Middleware functions can be used to perform various tasks, such as
            logging, authentication, parsing request bodies, and error handling.
            You can use built-in middleware or create custom middleware
            functions to suit your applications needs.
          </p>
          <h2 className="font-bold"> Request and Response Objects:</h2>
          <p>
            Express provides request and response
            objects that encapsulate the incoming HTTP request and outgoing HTTP
            response, making it easier to work with HTTP data.
          </p>
             
             <h2 className="font-bold">Finally</h2>
          <p>
            Express is known for its simplicity and speed, making it a popular
            choice for developers who want to quickly build web applications or
            APIs in Node.js. It has a large and active community, which results
            in a rich ecosystem of middleware and extensions that can be used to
            enhance and streamline development tasks. Many web applications and
            APIs, from small personal projects to large-scale enterprise
            applications, are built using Express.js due to its ease of use and
            versatility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogTwo;
