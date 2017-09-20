import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import SearchPage from '../SearchPage/SearchPage';

describe('SearchPage tests', () => {
  const history = {
    length: 35,
    action: 'PUSH',
    location: {
      pathname: '/suggestbook',
      search: '',
      hash: '',
      key: 'cl1agl',
    },
  };

  const userInfo = {
    user_id: 2,
    club_id: 1,
    readBooks: [
      {
        id: 1,
        title: 'Fantasy Book',
        author: 'George R.R. Martin',
        goodreads_id: '12345',
        avg_rating: '3.86',
        ratings_count: '1000',
        image: 'https://images.gr-assets.com/books/1436732693l/13496.jpg',
        upvotes: 1,
        downvotes: 1,
        status: 'read',
        user_id: 1,
        club_id: 1,
        created_at: '2017-09-19T06:01:45.624Z',
        updated_at: '2017-09-19T06:01:45.624Z',
      },
    ],
    currentBook: {
      id: 2,
      title: 'Muder/Mystery Book',
      author: 'Stieg Larsson',
      goodreads_id: '45678',
      avg_rating: '2.77',
      ratings_count: '1000',
      image: 'https://images.gr-assets.com/books/1327868566l/2429135.jpg',
      upvotes: 0,
      downvotes: 1,
      status: 'reading',
      user_id: 2,
      club_id: 1,
      created_at: '2017-09-19T06:01:45.625Z',
      updated_at: '2017-09-19T06:01:45.625Z',
    },
    apiUrl: '',
  };

  const wrapper = shallow(<SearchPage userInfo={userInfo} history={history} />);

  const resolveAfter2Seconds = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

  it('should have initial state', () => {
    expect(wrapper.state()).toEqual({
      books: [],
      suggestedBooks: [],
      loading: false,
    });
  });

  it.skip('should fetch books from goodreads api based on search input', async () => {

    fetchMock.get('https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=bIznxnF3I7kjliNKA5J7rw&q=eloquent%20javascript',
      `<GoodreadsResponse>
        <Request>
            <authentication>true</authentication>
            <key>
                <![CDATA[bIznxnF3I7kjliNKA5J7rw]]>
            </key>
            <method>
                <![CDATA[search_index]]>
            </method>
        </Request>
        <search>
            <query>
                <![CDATA[eloquent javascript]]>
            </query>
            <results-start>1</results-start>
            <results-end>2</results-end>
            <total-results>2</total-results>
            <source>Goodreads</source>
            <query-time-seconds>0.03</query-time-seconds>
            <results>
                <work>
                    <id type="integer">13787033</id>
                    <books_count type="integer">13</books_count>
                    <ratings_count type="integer">1369</ratings_count>
                    <text_reviews_count type="integer">111</text_reviews_count>
                    <original_publication_year type="integer">2010</original_publication_year>
                    <original_publication_month type="integer">11</original_publication_month>
                    <original_publication_day type="integer">15</original_publication_day>
                    <average_rating>4.13</average_rating>
                    <best_book type="Book">
                        <id type="integer">8910666</id>
                        <title>Eloquent JavaScript: A Modern Introduction to Programming</title>
                        <author>
                            <id type="integer">4209162</id>
                            <name>Marijn Haverbeke</name>
                        </author>
                        <image_url>https://images.gr-assets.com/books/1308260856m/8910666.jpg</image_url>
                        <small_image_url>https://images.gr-assets.com/books/1308260856s/8910666.jpg</small_image_url>
                    </best_book>
                </work>

                <work>
                    <id type="integer">57300038</id>
                    <books_count type="integer">1</books_count>
                    <ratings_count type="integer">0</ratings_count>
                    <text_reviews_count type="integer">0</text_reviews_count>
                    <original_publication_year type="integer" nil="true" />
                    <original_publication_month type="integer" nil="true" />
                    <original_publication_day type="integer" nil="true" />
                    <average_rating type="float">0.0</average_rating>
                    <best_book type="Book">
                        <id type="integer">35800771</id>
                        <title>Eloquent JavaScript: A Modern Introduction</title>
                        <author>
                            <id type="integer">4209162</id>
                            <name>Marijn Haverbeke</name>
                        </author>
                        <image_url>https://images.gr-assets.com/books/1500896841m/35800771.jpg</image_url>
                        <small_image_url>https://images.gr-assets.com/books/1500896841s/35800771.jpg</small_image_url>
                    </best_book>
                </work>

            </results>
        </search>
      </GoodreadsResponse>`);
    fetchMock.get('/api/v1/book?club_id=1', [
      {
        id: 1,
        title: 'Fantasy Book',
        author: 'George R.R. Martin',
        goodreads_id: '12345',
        avg_rating: '3.86',
        ratings_count: '1000',
        image: 'https://images.gr-assets.com/books/1436732693l/13496.jpg',
        upvotes: 1,
        downvotes: 1,
        status: 'read',
        user_id: 1,
        club_id: 1,
        created_at: '2017-09-19T06:01:45.624Z',
        updated_at: '2017-09-19T06:01:45.624Z',
      },
      {
        id: 2,
        title: 'Muder/Mystery Book',
        author: 'Stieg Larsson',
        goodreads_id: '45678',
        avg_rating: '2.77',
        ratings_count: '1000',
        image: 'https://images.gr-assets.com/books/1327868566l/2429135.jpg',
        upvotes: 0,
        downvotes: 1,
        status: 'reading',
        user_id: 2,
        club_id: 1,
        created_at: '2017-09-19T06:01:45.625Z',
        updated_at: '2017-09-19T06:01:45.625Z',
      },
      {
        id: 3,
        title: 'Horror Book',
        author: 'Stephen King',
        goodreads_id: '67890',
        avg_rating: '4.81',
        ratings_count: '1000',
        image: 'https://images.gr-assets.com/books/1334416842l/830502.jpg',
        upvotes: 2,
        downvotes: 0,
        status: 'suggested',
        user_id: 4,
        club_id: 1,
        created_at: '2017-09-19T06:01:45.625Z',
        updated_at: '2017-09-19T06:01:45.625Z',
      },
    ]);
    wrapper.instance().fetchBooks('eloquent javascript');
    await resolveAfter2Seconds();

    expect(wrapper.state()).toEqual({
      books: [
        {
          title: 'Eloquent JavaScript: A Modern Introduction to Programming',
          author: 'Marijn Haverbeke',
          image: 'https://images.gr-assets.com/books/1308260856m/8910666.jpg',
          avg_rating: '4.13',
          ratings_count: '1369',
          goodreads_id: '8910666',
        },
        {
          title: 'Eloquent JavaScript: A Modern Introduction',
          author: 'Marijn Haverbeke',
          image: 'https://images.gr-assets.com/books/1500896841m/35800771.jpg',
          avg_rating: '0.0',
          ratings_count: '0',
          goodreads_id: '35800771',
        },
      ],
      suggestedBooks: [
        {
          id: 1,
          title: 'Fantasy Book',
          author: 'George R.R. Martin',
          goodreads_id: '12345',
          avg_rating: '3.86',
          ratings_count: '1000',
          image: 'https://images.gr-assets.com/books/1436732693l/13496.jpg',
          upvotes: 1,
          downvotes: 1,
          status: 'read',
          user_id: 1,
          club_id: 1,
          created_at: '2017-09-19T06:01:45.624Z',
          updated_at: '2017-09-19T06:01:45.624Z',
        },
        {
          id: 2,
          title: 'Muder/Mystery Book',
          author: 'Stieg Larsson',
          goodreads_id: '45678',
          avg_rating: '2.77',
          ratings_count: '1000',
          image: 'https://images.gr-assets.com/books/1327868566l/2429135.jpg',
          upvotes: 0,
          downvotes: 1,
          status: 'reading',
          user_id: 2,
          club_id: 1,
          created_at: '2017-09-19T06:01:45.625Z',
          updated_at: '2017-09-19T06:01:45.625Z',
        },
        {
          id: 3,
          title: 'Horror Book',
          author: 'Stephen King',
          goodreads_id: '67890',
          avg_rating: '4.81',
          ratings_count: '1000',
          image: 'https://images.gr-assets.com/books/1334416842l/830502.jpg',
          upvotes: 2,
          downvotes: 0,
          status: 'suggested',
          user_id: 4,
          club_id: 1,
          created_at: '2017-09-19T06:01:45.625Z',
          updated_at: '2017-09-19T06:01:45.625Z',
        },
      ],
      loading: false,
    });
  });
  
  it('should render search page component with child components', () => {
    console.log(wrapper.debug());
    expect(wrapper.find('.search-page-component')).toHaveLength(1);
    expect(wrapper.find('.suggest-book')).toHaveLength(1);
    expect(wrapper.find('SearchForm')).toHaveLength(1);
    expect(wrapper.find('SearchResultsContainer')).toHaveLength(1);
  })
});

