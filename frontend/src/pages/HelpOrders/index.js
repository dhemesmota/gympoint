import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import Header from '~/components/ContainerHeader';
import ContainerBody from '~/components/ContainerBody';

import Loading from '~/components/Loading';

export default function HelpOrders() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function handleQuestions() {
      setLoading(true);

      const response = await api.get('/help-orders');

      setQuestions(response.data);
      setLoading(false);
    }

    handleQuestions();
  }, []);

  return (
    <>
      <Header>
        <h1>Pedidos de auxílio</h1>
      </Header>

      <ContainerBody>
        {loading ? (
          <Loading />
        ) : (
          <table>
            <thead>
              <tr>
                <th>ALUNO</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {questions &&
                questions.map(question => (
                  <tr key={question.id}>
                    <td>{question.student.name}</td>
                    <td>
                      <span>
                        <button type="button" className="info">
                          responder
                        </button>
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </ContainerBody>
    </>
  );
}
