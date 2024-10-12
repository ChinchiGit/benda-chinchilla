import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Blog.css';

const blogPosts = [
  {
    title: 'Benda Chinchilla 500: La nueva sensación en el mundo de las custom',
    date: '2024-03-15',
    content: 'La Benda Chinchilla 500 está causando furor en el mercado europeo de las motos custom. Con su diseño retro y prestaciones modernas, esta moto china está ganando adeptos rápidamente...'
  },
  {
    title: 'Comparativa: Benda Chinchilla 500 vs. Competidores',
    date: '2024-03-10',
    content: 'Hemos puesto a prueba la Benda Chinchilla 500 frente a sus principales competidores en el segmento de las custom de media cilindrada. Los resultados te sorprenderán...'
  },
  {
    title: 'Entrevista exclusiva con el diseñador de la Benda Chinchilla 500',
    date: '2024-03-05',
    content: 'Tuvimos la oportunidad de hablar con el diseñador jefe de Benda sobre la creación de la Chinchilla 500. Descubre los secretos detrás de su atractivo diseño...'
  },
  {
    title: 'Las mejores rutas para disfrutar de tu Benda Chinchilla 500',
    date: '2024-02-28',
    content: 'Si eres el orgulloso propietario de una Benda Chinchilla 500, no te puedes perder estas increíbles rutas que hemos seleccionado para sacar el máximo partido a tu moto...'
  }
];

const Blog = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // useEffect(() => {
  //   if (inView) {
  //     ref.current.classList.add('is-visible');
  //   }
  // }, [inView, ref]);

  return (
    <section id="blog" className={`blog animate-on-scroll ${inView ? 'is-visible' : ''}`} ref={ref}>
      <h2>Blog</h2>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <article key={index} className="blog-post">
            <h3>{post.title}</h3>
            <p className="post-date">{post.date}</p>
            <p>{post.content}</p>
            <a href="#" className="read-more">Leer más</a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;