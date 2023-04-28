import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import SectionWrapper from './hoc/SectionWrapper';
import { slideIn } from '../utils/motion';
import Alert from './Alert';
import Socials from './Socials';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert('success');
    setTimeout(() => {
      setAlert('');
    }, 4000);
    return;
    if (
      !form.name ||
      !form.email ||
      !form.message ||
      !form.subject ||
      !form.email.includes('@')
    ) {
      setError('Please fill all fields with valid values.');
      setAlert('error');
      setTimeout(() => {
        setAlert('');
        setError('');
      }, 2000);
      return;
    }
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Ahmed',
          from_email: form.email,
          to_email: 'ginryoix@gmail.com',
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setAlert('success');
          setTimeout(() => {
            setAlert('');
          }, 2000);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          setAlert('error');
          setTimeout(() => {
            setAlert('');
          }, 2000);
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] relative bg-transparent border-tertiary border-2 p-8 rounded"
      >
        {alert && <Alert state={alert} error={error}></Alert>}

        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 relative"
        >
          <label className="flex flex-col">
            <span className="text-tertiary font-medium mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Gin Ryo"
              className="bg-lighter font-para bg-opacity-50 py-4 px-6 placeholder:text-white-200 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-tertiary font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ahmed@gryo.com"
              className="bg-lighter bg-opacity-50 font-para py-4 px-6 placeholder:text-white-200 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-tertiary font-medium mb-4">Subject</span>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Type subject..."
              className="bg-lighter bg-opacity-50 font-para py-4 px-6 placeholder:text-white-200 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-tertiary font-medium mb-4">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type message"
              className="bg-lighter bg-opacity-50 font-para py-4 px-6 placeholder:text-white-200 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <div className="flex sm:flex-row sm:justify-between sm:align-center sm:gap-0 flex-col gap-4">
            <button
              type="submit"
              className="cta py-3 px-8 w-fit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Say Hello'}
            </button>
            <Socials />
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const contactComponent = SectionWrapper(
  Contact,
  'contact',
  `min-h-screen w-full ${styles.padding} 
max-w-7xl mx-auto sm:pb-24  pb-40`
);

export default contactComponent;
