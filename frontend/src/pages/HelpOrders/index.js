import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Header from '~/components/ContainerHeader';
import ContainerBody from '~/components/ContainerBody';

import Loading from '~/components/Loading';

import { ContainerModal } from './styles';

const schema = Yup.object().shape({
  answer: Yup.string().required('A resposta é obrigatória.'),
});

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '450px',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
};
export default function HelpOrders() {
  const [helporders, setHelporders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [help, setHelp] = useState([]);
  const [open, setOpen] = useState(true);

  async function handleSubmit({ answer }) {
    try {
      await api.post(`/help-orders/${help.id}/answer`, { answer });

      setHelporders(helporders.filter(helporder => helporder.id !== help.id));

      toast.success('Resposta enviada ao aluno.');

      setOpen(false);
    } catch (err) {
      toast.error('Não foi possível responder a dúvida do aluno.');
    }
  }

  const [showModal, hideModal] = useModal(
    () => (
      <ReactModal
        isOpen={open}
        ariaHideApp={false}
        style={customStyles}
        onRequestClose={hideModal}
      >
        <ContainerModal>
          <Form schema={schema} onSubmit={handleSubmit}>
            <strong>PERGUNTA DO ALUNO</strong>
            <p>{help.question}</p>

            <div>
              <Input
                label="SUA RESPOSTA"
                name="answer"
                multiline
                placeholder="Digite aqui a sua resposta..."
              />
            </div>

            <button type="submit">Responder aluno</button>
          </Form>
        </ContainerModal>
      </ReactModal>
    ),
    [help, open]
  );

  useEffect(() => {
    async function handleHelporders() {
      setLoading(true);

      const response = await api.get('/help-orders');

      setHelporders(response.data);
      setLoading(false);
    }

    handleHelporders();
  }, []);

  function handleModal(data) {
    setHelp(data);
    setOpen(true);
    showModal();
  }

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
              {helporders &&
                helporders.map(helporder => (
                  <tr key={helporder.id}>
                    <td>{helporder.student.name}</td>
                    <td>
                      <span>
                        <button
                          onClick={() => handleModal(helporder)}
                          type="button"
                          className="info"
                        >
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
