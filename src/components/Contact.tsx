import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = "SAMPLE_URL";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response)=> {
      if (response.ok) {
        //do something
      } else {
        //error handling
      }
    })
    .catch((error) => {
      //network error or other error occurred, handle error
    });
  };


  return (
    <div style={{background:"#F5EFE7"}} className='h-[90vh]'>
        <h1>Send us a message</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w" >
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="Your name" id="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Your email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          placeholder="Your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Send Email</button>
        </form>
    </div>
  )
}

export default Contact