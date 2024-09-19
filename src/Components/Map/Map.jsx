import React from 'react';

const Map = () => {
  return (
    <div className="w-full flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7310.148040489913!2d86.74652416340914!3d23.252430691841234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6ac53bfbec29b%3A0xe4b3b8e3b27a5d2b!2sKingsukh%20Guest%20House%2C%20beside%20Barshal%20Water%20Tank%2C%20Manpur%2C%20Barhanti%2C%20West%20Bengal%20723156!5e0!3m2!1sen!2sin!4v1694756637425!5m2!1sen!2sin"
        width="100%"
        height={'400'} // Default to 400px height if no prop is passed
        className="rounded-lg shadow-lg"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map"
      ></iframe>
    </div>
  );
};

export default Map;
