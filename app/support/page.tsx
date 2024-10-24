'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Send, ArrowLeft, MoreVertical } from 'lucide-react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'support'
  timestamp: Date
}

export default function SupportPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Olá! Como posso ajudar você hoje?',
      sender: 'support',
      timestamp: new Date(Date.now() - 300000),
    },
    {
      id: 2,
      text: 'Estou com um problema na entrega do meu pedido.',
      sender: 'user',
      timestamp: new Date(Date.now() - 240000),
    },
    {
      id: 3,
      text: 'Lamento ouvir isso. Pode me fornecer mais detalhes sobre o problema?',
      sender: 'support',
      timestamp: new Date(Date.now() - 180000),
    },
  ])
  const [newMessage, setNewMessage] = useState('')
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        timestamp: new Date(),
      }
      setMessages([...messages, userMessage])
      setNewMessage('')

      // Simular resposta do suporte após 1 segundo
      setTimeout(() => {
        const supportMessage: Message = {
          id: messages.length + 2,
          text: 'Obrigado por fornecer essas informações. Estou verificando o status do seu pedido agora.',
          sender: 'support',
          timestamp: new Date(),
        }
        setMessages((prevMessages) => [...prevMessages, supportMessage])
      }, 1000)
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4 flex items-center">
        <Button variant="ghost" size="icon" className="mr-2">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage
            src="/placeholder-avatar.jpg"
            alt="Suporte Condelivery"
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="font-semibold">Suporte Condelivery</h1>
          <p className="text-sm opacity-75">Online</p>
        </div>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-6 w-6" />
        </Button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 lg:w-[1024px] lg:mx-auto">
        <ScrollArea className="p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground'
                }`}
              >
                <p>{message.text}</p>
                <p className="text-xs mt-1 opacity-75">
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </ScrollArea>
      </div>

      {/* Message Input */}
      <div className="bg-background p-4 flex items-center">
        <Input
          type="text"
          placeholder="Digite sua mensagem..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 mr-2"
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <Button onClick={handleSendMessage} size="icon">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
