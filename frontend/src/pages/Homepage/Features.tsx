type Feature = {
    image: string,
    alt: string,
    title: string,
    content: string
  };
  
  type Props = {
    features: Feature[]
  }
  
  function Features({ features }: Props) {
    return (
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {features.map((feature: Feature, index: number) => (
          <div className="feature-item" key={index}>
            <img src={feature.image} alt={feature.alt} className="feature-icon" />
            <h3 className="feature-item-title">{feature.title}</h3>
            <p>{feature.content}</p>
          </div>
        ))}
      </section>
    )
  }
  
  export default Features;