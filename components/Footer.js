import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-gray-500 p-4 flex justify-between items-center">
      <div className="left">
        <p>&copy; 2020, Workflow, Inc. All rights reserved.</p>
      </div>
      <div className="right">
        <div className="flex space-x-4">
          <a href="https://www.facebook.com">
            <FaFacebook className="text-gray-500 hover:text-white" size={24} />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram className="text-gray-500 hover:text-white" size={24} />
          </a>
          <a href="https://twitter.com">
            <FaTwitter className="text-gray-500 hover:text-white" size={24} />
          </a>
          <a href="https://github.com">
            <FaGithub className="text-gray-500 hover:text-white" size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
