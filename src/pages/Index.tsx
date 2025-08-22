import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: 'Sword',
      title: 'Эпические Сражения',
      description: 'Динамичная боевая система с магическими способностями и комбо-атаками'
    },
    {
      icon: 'Map',
      title: 'Открытый Мир',
      description: 'Исследуй огромный мир с секретными локациями и древними подземельями'
    },
    {
      icon: 'Users',
      title: 'Мультиплеер',
      description: 'Играй с друзьями в кооперативе или сражайся в PvP арене'
    },
    {
      icon: 'Zap',
      title: 'Система Магии',
      description: 'Изучай заклинания и создавай уникальные магические комбинации'
    }
  ];

  const gameplayVideos = [
    { title: 'Боевая Система', duration: '2:34' },
    { title: 'Исследование Мира', duration: '3:12' },
    { title: 'Магические Способности', duration: '1:58' }
  ];

  const systemRequirements = {
    minimum: {
      os: 'Windows 10',
      processor: 'Intel i5-4590 / AMD FX 8350',
      memory: '8 GB RAM',
      graphics: 'GTX 1060 / RX 580',
      storage: '25 GB'
    },
    recommended: {
      os: 'Windows 11',
      processor: 'Intel i7-8700K / AMD Ryzen 5 3600',
      memory: '16 GB RAM',
      graphics: 'RTX 3070 / RX 6700 XT',
      storage: '25 GB SSD'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-game-dark via-slate-900 to-game-dark text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-game-primary/20 via-game-purple/20 to-game-cyan/20 animate-pulse"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-game-accent/10 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-game-dark/90 backdrop-blur-sm border-b border-game-primary/30 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-game-primary to-game-purple rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-game-primary to-game-purple bg-clip-text text-transparent">
                MYSTIC REALM
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              {['Главная', 'Геймплей', 'Новости', 'Сообщество'].map((item) => (
                <button key={item} className="text-white/80 hover:text-game-primary transition-colors relative group">
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-game-primary transition-all group-hover:w-full"></div>
                </button>
              ))}
              
              <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-game-primary to-game-purple hover:from-game-primary/80 hover:to-game-purple/80 border-0">
                    <Icon name="LogIn" size={16} className="mr-2" />
                    Войти в игру
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-game-dark border border-game-primary/30">
                  <DialogHeader>
                    <DialogTitle className="text-white text-xl flex items-center gap-2">
                      <Icon name="Gamepad2" size={24} className="text-game-primary" />
                      Вход в Mystic Realm
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Продолжи свое магическое приключение
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-white">Email</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="adventurer@realm.com"
                        className="bg-slate-800 border-game-primary/30 text-white focus:border-game-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="text-white">Пароль</Label>
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        className="bg-slate-800 border-game-primary/30 text-white focus:border-game-primary"
                      />
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-game-primary to-game-purple hover:from-game-primary/80 hover:to-game-purple/80">
                      <Icon name="Sparkles" size={16} className="mr-2" />
                      Войти в мир магии
                    </Button>
                    
                    <div className="flex justify-center space-x-2">
                      <Button variant="outline" className="border-game-primary text-game-primary hover:bg-game-primary hover:text-white">
                        <Icon name="Github" size={16} />
                      </Button>
                      <Button variant="outline" className="border-game-accent text-game-accent hover:bg-game-accent hover:text-white">
                        Steam
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Button className="md:hidden bg-game-primary hover:bg-game-primary/80">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-gradient-to-r from-game-primary to-game-purple text-white mb-6 px-4 py-2">
                  🎮 Новая глава приключений
                </Badge>
                <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-none">
                  <span className="bg-gradient-to-r from-game-primary via-game-purple to-game-cyan bg-clip-text text-transparent">
                    MYSTIC
                  </span>
                  <br />
                  <span className="text-white">REALM</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Погрузись в захватывающий мир магии и приключений. Исследуй древние руины, 
                  сражайся с мифическими существами и открывай тайны забытых цивилизаций.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-game-primary to-game-purple hover:shadow-lg hover:shadow-game-primary/25 transform hover:scale-105 transition-all duration-300 px-8 py-3 text-lg">
                  <Icon name="Play" size={20} className="mr-2" />
                  Играть бесплатно
                </Button>
                <Button variant="outline" className="border-2 border-game-accent text-game-accent hover:bg-game-accent hover:text-white px-8 py-3 text-lg">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать
                </Button>
                <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-game-dark px-8 py-3 text-lg">
                  <Icon name="Youtube" size={20} className="mr-2" />
                  Трейлер
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-game-primary to-game-purple bg-clip-text text-transparent">
                    500K+
                  </div>
                  <div className="text-gray-400 text-sm">Игроков</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-game-accent to-game-orange bg-clip-text text-transparent">
                    4.9★
                  </div>
                  <div className="text-gray-400 text-sm">Рейтинг</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-game-success to-game-cyan bg-clip-text text-transparent">
                    50+
                  </div>
                  <div className="text-gray-400 text-sm">Часов игры</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/7a15e28b-4fab-465f-a876-709581a5d5f1.jpg"
                  alt="Mystic Realm Hero"
                  className="w-full h-auto rounded-2xl shadow-2xl border border-game-primary/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-game-dark/80 via-transparent to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-game-primary/20 to-game-purple/20 rounded-2xl blur-2xl transform scale-105 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-game-primary to-game-purple bg-clip-text text-transparent">
                Игровые Особенности
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Откройте для себя уникальный игровой опыт</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="bg-slate-800/50 border-game-primary/30 hover:border-game-primary hover:shadow-lg hover:shadow-game-primary/25 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-game-primary to-game-purple rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={feature.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-white text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gameplay Videos */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-game-accent to-game-orange bg-clip-text text-transparent">
                Геймплей
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Посмотри игру в действии</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/img/08667bcf-9127-4240-b676-710c333c1874.jpg"
                alt="Gameplay Screenshot"
                className="w-full h-auto rounded-xl border border-game-accent/30"
              />
              <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <div className="w-20 h-20 bg-game-primary rounded-full flex items-center justify-center">
                  <Icon name="Play" size={32} className="text-white ml-1" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {gameplayVideos.map((video, index) => (
                <div 
                  key={video.title}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                    activeVideo === index 
                      ? 'bg-game-primary/10 border-game-primary' 
                      : 'bg-slate-800/50 border-slate-700 hover:border-game-primary/50'
                  }`}
                  onClick={() => setActiveVideo(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-game-primary rounded-lg flex items-center justify-center">
                        <Icon name="Play" size={16} className="text-white ml-0.5" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{video.title}</h3>
                        <p className="text-gray-400 text-sm">{video.duration}</p>
                      </div>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-game-primary" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-game-cyan to-game-purple bg-clip-text text-transparent">
                Скриншоты
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Красота игрового мира</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="/img/60488fee-8f41-49b1-805b-1b84fba24f85.jpg"
                alt="Game Environment"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold">Мистический Лес</h3>
                  <p className="text-gray-300 text-sm">Древние магические кристаллы</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="/img/08667bcf-9127-4240-b676-710c333c1874.jpg"
                alt="Combat System"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold">Боевая Система</h3>
                  <p className="text-gray-300 text-sm">Магические способности</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="/img/7a15e28b-4fab-465f-a876-709581a5d5f1.jpg"
                alt="Character Design"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold">Герои</h3>
                  <p className="text-gray-300 text-sm">Уникальные персонажи</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-game-success to-game-cyan bg-clip-text text-transparent">
                Системные Требования
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Убедись, что твой компьютер готов к приключениям</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-game-success/30">
              <CardHeader>
                <CardTitle className="text-game-success flex items-center gap-2">
                  <Icon name="Monitor" size={20} />
                  Минимальные
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">ОС:</span>
                  <span className="text-white">{systemRequirements.minimum.os}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Процессор:</span>
                  <span className="text-white">{systemRequirements.minimum.processor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Память:</span>
                  <span className="text-white">{systemRequirements.minimum.memory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Видеокарта:</span>
                  <span className="text-white">{systemRequirements.minimum.graphics}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Место:</span>
                  <span className="text-white">{systemRequirements.minimum.storage}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-game-primary/30">
              <CardHeader>
                <CardTitle className="text-game-primary flex items-center gap-2">
                  <Icon name="Zap" size={20} />
                  Рекомендуемые
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">ОС:</span>
                  <span className="text-white">{systemRequirements.recommended.os}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Процессор:</span>
                  <span className="text-white">{systemRequirements.recommended.processor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Память:</span>
                  <span className="text-white">{systemRequirements.recommended.memory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Видеокарта:</span>
                  <span className="text-white">{systemRequirements.recommended.graphics}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Место:</span>
                  <span className="text-white">{systemRequirements.recommended.storage}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-game-accent to-game-orange bg-clip-text text-transparent">
                Скачать Игру
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Доступно на всех популярных платформах</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Steam', icon: 'Gamepad2', color: 'from-game-primary to-game-purple', price: '1,299₽' },
              { name: 'Epic Games', icon: 'Zap', color: 'from-game-accent to-game-orange', price: 'Бесплатно' },
              { name: 'Windows', icon: 'Monitor', color: 'from-game-cyan to-game-primary', price: '1,199₽' },
              { name: 'Mac', icon: 'Laptop', color: 'from-game-purple to-game-pink', price: '1,199₽' }
            ].map((platform) => (
              <Card key={platform.name} className="bg-slate-800/50 border-game-primary/30 hover:border-game-primary hover:shadow-lg hover:shadow-game-primary/25 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={platform.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-white text-lg font-bold mb-2">{platform.name}</h3>
                  <p className="text-game-accent text-xl font-bold mb-4">{platform.price}</p>
                  <Button className="w-full bg-gradient-to-r from-game-primary to-game-purple hover:from-game-primary/80 hover:to-game-purple/80">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-game-dark py-16 border-t border-game-primary/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-game-primary to-game-purple rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-game-primary to-game-purple bg-clip-text text-transparent">
                  MYSTIC REALM
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Погрузись в мир магии и приключений. Создано с любовью для всех фанатов RPG.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Игра</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-game-primary transition-colors">Системные требования</a></li>
                <li><a href="#" className="hover:text-game-primary transition-colors">Обновления</a></li>
                <li><a href="#" className="hover:text-game-primary transition-colors">Достижения</a></li>
                <li><a href="#" className="hover:text-game-primary transition-colors">Поддержка</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-game-primary transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-game-primary transition-colors">Reddit</a></li>
                <li><a href="#" className="hover:text-game-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-game-primary transition-colors">YouTube</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Платформы</h4>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="border-game-primary text-game-primary hover:bg-game-primary hover:text-white">
                  <Icon name="Gamepad2" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="border-game-accent text-game-accent hover:bg-game-accent hover:text-white">
                  <Icon name="Monitor" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="border-game-purple text-game-purple hover:bg-game-purple hover:text-white">
                  <Icon name="Smartphone" size={16} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-game-primary/30 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Mystic Realm. Все права защищены. Создано с ❤️ для геймеров.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;