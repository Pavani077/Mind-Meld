import React from 'react';

const Clients: React.FC = () => {
  return (
    <section className="clients">
      <div className="container">
        <h3>Trusted by innovative teams worldwide</h3>
        <div className="client-logos">
          <img src="/images/client-1.svg" alt="Client 1" />
          <img src="/images/client-2.svg" alt="Client 2" />
          <img src="/images/client-3.svg" alt="Client 3" />
          <img src="/images/client-4.svg" alt="Client 4" />
          <img src="/images/client-5.svg" alt="Client 5" />
        </div>
      </div>
    </section>
  );
};

export default Clients;