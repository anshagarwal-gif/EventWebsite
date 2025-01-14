import React from 'react'
import AppointmentComponent from '../../Components/AppointmentComponent/AppointmentComponent'
import NewsImage from './Assets/newsImage.jpeg'
import './Blog.css'
import BlogPostImage from './Assets/blogPostImage.jpeg'

const Blog = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const blogPosts = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: '/api/placeholder/400/300'
        },
        {
            id: 1,
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: '/api/placeholder/400/300'
        },
        {
            id: 1,
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: '/api/placeholder/400/300'
        },
        {
            id: 1,
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: '/api/placeholder/400/300'
        },
        {
            id: 1,
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: '/api/placeholder/400/300'
        }
    ];

    const postsPerPage = 3;
    const totalPages = 24;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPaginationNumbers = () => {
        let pages = [];
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, currentPage + 2);

        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) {
                pages.push('...');
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push('...');
            }
            pages.push(totalPages);
        }

        return pages.map((page, index) => {
            if (page === '...') {
                return <span key={`ellipsis-${index}`} className="blog-pagination-ellipsis">...</span>;
            }
            return (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`blog-pagination-number ${currentPage === page ? 'blog-pagination-active' : ''}`}
                >
                    {String(page).padStart(2, '0')}
                </button>
            );
        });
    };

    return (
        <div>
            <div className='blog-card'>
                <div className='blog-image-container'>
                    <img src={NewsImage} alt="newsimage" className='blog-image' />
                </div>
                <p className='blog-date'>01 JUNE 2024</p>
                <h1 className='blog-title'>Unveiling Excellence in Events & Exhibitions</h1>
                <div className='blog-content'>

                    <p className='blog-description'>Welcome to the latest edition of the Wadhwa Events & Exhibits newsletter, where we celebrate our milestones and showcase our commitment to creating extraordinary experiences for our esteemed clients. From corporate giants to educational institutions, we have left an indelible mark in the world of events and exhibits.</p>
                    <p className='blog-description'>Our clientele speaks volumes about our expertise and dedication. We’ve delivered sophisticated and dynamic corporate event solutions for TATA, reflecting the brand’s innovation and legacy; curated elegant and expansive exhibitions for Sahara that showcased the company’s diverse portfolio; designed high-impact product launches and trade show exhibits for JCB to captivate global audiences; executed luxurious private events and bespoke exhibits for Pristine’s elite clientele; partnered with ICE Global for international conferences, ensuring flawless execution with a touch of finesse; and crafted stunning displays and promotional events for PNG Jewellers that radiated the brand’s elegance and tradition.</p>
                    <p className='blog-description'>At MIT ADT University, we have managed a variety of impactful events that showcased the institution’s commitment to innovation and excellence. Our work included conceptualizing and executing academic summits, cultural fests, and technology expos that brought together students, faculty, and industry leaders. Notably, we had the honor of hosting and managing Persona, Pune's biggest techno-cultural event. With its dynamic mix of technology, culture, and creativity, Persona became a resounding success under our meticulous planning and seamless execution, further solidifying the university’s reputation as a hub of innovation and culture.</p>
                    <p className='blog-description'>We take pride in our ability to adapt and innovate. Whether it’s crafting bespoke solutions for new-age startups or handling mega-events for established enterprises, Wadhwa Events & Exhibits continues to redefine industry standards. As we step into the future, our commitment to delivering excellence remains unwavering. With each project, we aim to inspire, innovate, and leave a lasting impression on our clients and their audiences.</p>
                    <p className='blog-description'>Follow us on our journey to transform ideas into reality. For inquiries, partnerships, or to explore how we can make your vision come alive, reach out to us today.</p>
                </div>
            </div>

            <div className='section-divider'></div>

            <div className="blog-container">
                <h1 className="blog-heading">RECENT BLOG POST</h1>

                <div className="blog-grid">
                    {blogPosts.map(post => (
                        <div key={post.id} className="blog-card">
                            <div className="blog-image-wrapper">
                                <img src={post.image} alt={post.title} className="blog-image" />
                            </div>
                            <h2 className="blog-title">{post.title}</h2>
                            <p className="blog-description">{post.description}</p>
                        </div>
                    ))}
                </div>

                <div className="blog-pagination">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="blog-pagination-nav"
                    >
                        Prev
                    </button>

                    <div className="blog-pagination-numbers">
                        {renderPaginationNumbers()}
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="blog-pagination-nav"
                    >
                        Next
                    </button>
                </div>
            </div>

            <AppointmentComponent />
        </div>
    )
}

export default Blog
