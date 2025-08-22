import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const updates = [
    {
      version: "v2.1.0",
      date: "15 августа 2024",
      changes: ["Новый босс-дракон", "Исправление багов инвентаря", "Добавлен магазин зелий"],
      type: "major"
    },
    {
      version: "v2.0.5",
      date: "3 августа 2024", 
      changes: ["Баланс заклинаний", "Новые пиксельные эффекты", "Оптимизация производительности"],
      type: "patch"
    },
    {
      version: "v2.0.0",
      date: "20 июля 2024",
      changes: ["Полное обновление графики", "Новая система прокачки", "Мультиплеер режим"],
      type: "major"
    }
  ];

  const platforms = [
    { name: "Windows", icon: "Monitor", color: "bg-pixel-blue" },
    { name: "Mac", icon: "Apple", color: "bg-pixel-gray" },
    { name: "Linux", icon: "Terminal", color: "bg-pixel-purple" },
    { name: "Steam", icon: "Gamepad2", color: "bg-pixel-yellow" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pixel-purple via-pixel-blue to-pixel-purple">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-pixel-purple/90 backdrop-blur-sm border-b-4 border-pixel-orange z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-pixel-orange animate-pixel-bounce"></div>
              <span className="text-white font-pixel text-xl font-bold">PIXEL GAME</span>
            </div>
            
            <div className="hidden md:flex space-x-6 items-center">
              {['Главная', 'Игра', 'Новости', 'Скачать'].map((item) => (
                <button key={item} className="text-white hover:text-pixel-orange transition-colors font-pixel">
                  {item}
                </button>
              ))}
              
              <div className="flex space-x-2">
                <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-transparent border-2 border-pixel-orange text-pixel-orange hover:bg-pixel-orange hover:text-white font-pixel">
                      <Icon name="LogIn" size={16} className="mr-2" />
                      Вход
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-pixel-purple border-4 border-pixel-orange">
                    <DialogHeader>
                      <DialogTitle className="text-white font-pixel text-2xl flex items-center gap-2">
                        <Icon name="LogIn" size={24} className="text-pixel-orange" />
                        Вход в игру
                      </DialogTitle>
                      <DialogDescription className="text-pixel-gray">
                        Войди в свой аккаунт, чтобы продолжить приключение!
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="login-email" className="text-white font-pixel">
                          Email или никнейм
                        </Label>
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="player@pixelgame.com"
                          className="bg-black/40 border-2 border-pixel-blue text-white placeholder:text-pixel-gray focus:border-pixel-orange"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="login-password" className="text-white font-pixel">
                          Пароль
                        </Label>
                        <Input
                          id="login-password"
                          type="password"
                          placeholder="••••••••"
                          className="bg-black/40 border-2 border-pixel-blue text-white placeholder:text-pixel-gray focus:border-pixel-orange"
                        />
                      </div>
                      
                      <Button className="w-full bg-pixel-orange hover:bg-pixel-orange/80 text-white font-pixel text-lg py-3">
                        <Icon name="Zap" size={20} className="mr-2" />
                        Войти в игру!
                      </Button>
                      
                      <div className="text-center">
                        <button 
                          onClick={() => {
                            setIsLoginOpen(false);
                            setIsRegisterOpen(true);
                          }}
                          className="text-pixel-orange hover:text-pixel-yellow font-pixel"
                        >
                          Нет аккаунта? Зарегистрируйся!
                        </button>
                      </div>
                      
                      <div className="flex justify-center space-x-2">
                        <Button variant="outline" className="border-pixel-blue text-pixel-blue hover:bg-pixel-blue hover:text-white">
                          <Icon name="Github" size={16} />
                        </Button>
                        <Button variant="outline" className="border-pixel-yellow text-pixel-yellow hover:bg-pixel-yellow hover:text-white">
                          Google
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-pixel-orange hover:bg-pixel-orange/80 text-white font-pixel">
                      <Icon name="UserPlus" size={16} className="mr-2" />
                      Регистрация
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-pixel-purple border-4 border-pixel-orange">
                    <DialogHeader>
                      <DialogTitle className="text-white font-pixel text-2xl flex items-center gap-2">
                        <Icon name="UserPlus" size={24} className="text-pixel-orange" />
                        Создать персонажа
                      </DialogTitle>
                      <DialogDescription className="text-pixel-gray">
                        Присоединяйся к миру пиксельных приключений!
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="register-nickname" className="text-white font-pixel">
                          Никнейм игрока
                        </Label>
                        <Input
                          id="register-nickname"
                          type="text"
                          placeholder="PixelWarrior"
                          className="bg-black/40 border-2 border-pixel-blue text-white placeholder:text-pixel-gray focus:border-pixel-orange"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="register-email" className="text-white font-pixel">
                          Email
                        </Label>
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="player@pixelgame.com"
                          className="bg-black/40 border-2 border-pixel-blue text-white placeholder:text-pixel-gray focus:border-pixel-orange"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="register-password" className="text-white font-pixel">
                          Пароль
                        </Label>
                        <Input
                          id="register-password"
                          type="password"
                          placeholder="••••••••"
                          className="bg-black/40 border-2 border-pixel-blue text-white placeholder:text-pixel-gray focus:border-pixel-orange"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="register-confirm" className="text-white font-pixel">
                          Подтвердить пароль
                        </Label>
                        <Input
                          id="register-confirm"
                          type="password"
                          placeholder="••••••••"
                          className="bg-black/40 border-2 border-pixel-blue text-white placeholder:text-pixel-gray focus:border-pixel-orange"
                        />
                      </div>
                      
                      <Button className="w-full bg-pixel-orange hover:bg-pixel-orange/80 text-white font-pixel text-lg py-3">
                        <Icon name="Sparkles" size={20} className="mr-2" />
                        Начать приключение!
                      </Button>
                      
                      <div className="text-center">
                        <button 
                          onClick={() => {
                            setIsRegisterOpen(false);
                            setIsLoginOpen(true);
                          }}
                          className="text-pixel-orange hover:text-pixel-yellow font-pixel"
                        >
                          Уже есть аккаунт? Войти
                        </button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <Button className="md:hidden bg-pixel-orange hover:bg-pixel-orange/80">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-pixel-orange text-white mb-4 font-pixel">
                  🎮 Ретро Приключение
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-white font-pixel mb-6 animate-pixel-glow">
                  PIXEL
                  <br />
                  ADVENTURE
                </h1>
                <p className="text-xl text-pixel-gray leading-relaxed">
                  Погрузись в магический мир пиксельных приключений! Сражайся с драконами, 
                  собирай древние артефакты и стань величайшим магом в истории.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-pixel-orange hover:bg-pixel-orange/80 text-white px-8 py-3 text-lg font-pixel animate-pixel-bounce">
                  <Icon name="Play" size={20} className="mr-2" />
                  Играть сейчас
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-pixel-purple px-8 py-3 text-lg font-pixel">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать
                </Button>
              </div>

              <div className="flex space-x-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-pixel-orange font-pixel">50K+</div>
                  <div className="text-pixel-gray">Игроков</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pixel-yellow font-pixel">4.9★</div>
                  <div className="text-pixel-gray">Рейтинг</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pixel-orange font-pixel">100+</div>
                  <div className="text-pixel-gray">Уровней</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/0baa7d44-4040-4646-87bb-65c5363f4d74.jpg" 
                  alt="Pixel Game Hero"
                  className="w-full h-auto rounded-lg border-4 border-pixel-orange shadow-2xl animate-pixel-glow"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-pixel-orange to-pixel-yellow opacity-20 rounded-lg blur-xl transform scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Screenshot */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white font-pixel mb-4">Игровой Мир</h2>
            <p className="text-pixel-gray text-lg">Исследуй бескрайние пиксельные земли</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <img 
              src="/img/d598909e-b25b-4b5d-b9c5-53ce00e896c5.jpg" 
              alt="Game World"
              className="w-full rounded-lg border-4 border-pixel-blue shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white font-pixel mb-4">Скачать Игру</h2>
            <p className="text-pixel-gray text-lg">Доступно на всех популярных платформах</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <Card key={platform.name} className="bg-black/40 border-2 border-pixel-orange hover:border-pixel-yellow transition-colors group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${platform.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-pixel-bounce`}>
                    <Icon name={platform.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-white font-pixel text-lg font-bold mb-2">{platform.name}</h3>
                  <Button className="w-full bg-pixel-orange hover:bg-pixel-orange/80 font-pixel">
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white font-pixel mb-4">История Обновлений</h2>
            <p className="text-pixel-gray text-lg">Следи за последними изменениями и патчами</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="updates" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 bg-black/40">
                <TabsTrigger value="updates" className="font-pixel data-[state=active]:bg-pixel-orange">
                  Обновления
                </TabsTrigger>
                <TabsTrigger value="news" className="font-pixel data-[state=active]:bg-pixel-orange">
                  Новости
                </TabsTrigger>
              </TabsList>

              <TabsContent value="updates" className="space-y-6">
                {updates.map((update) => (
                  <Card key={update.version} className="bg-black/40 border-2 border-pixel-blue hover:border-pixel-orange transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="text-white font-pixel flex items-center gap-2">
                          {update.version}
                          <Badge className={`${update.type === 'major' ? 'bg-pixel-orange' : 'bg-pixel-blue'} font-pixel`}>
                            {update.type === 'major' ? 'Крупное' : 'Патч'}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="text-pixel-gray">
                          {update.date}
                        </CardDescription>
                      </div>
                      <Icon name="Download" size={20} className="text-pixel-orange" />
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {update.changes.map((change, index) => (
                          <li key={index} className="text-pixel-gray flex items-center gap-2">
                            <div className="w-2 h-2 bg-pixel-orange rounded-full"></div>
                            {change}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="news" className="space-y-6">
                <Card className="bg-black/40 border-2 border-pixel-yellow">
                  <CardHeader>
                    <CardTitle className="text-white font-pixel">🎉 Турнир игроков</CardTitle>
                    <CardDescription className="text-pixel-gray">22 августа 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-pixel-gray">
                      Участвуй в грандиозном турнире! Призовой фонд - 1000 золотых монет! 
                      Регистрация до 30 августа.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 border-2 border-pixel-blue">
                  <CardHeader>
                    <CardTitle className="text-white font-pixel">⚔️ Новое подземелье</CardTitle>
                    <CardDescription className="text-pixel-gray">18 августа 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-pixel-gray">
                      Открываем новое подземелье "Пещеры Теней" с уникальными боссами и наградами!
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Profile/Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white font-pixel mb-4">Профиль Разработчика</h2>
            <p className="text-pixel-gray text-lg">Познакомься с создателем игры</p>
          </div>

          <Card className="max-w-2xl mx-auto bg-black/40 border-2 border-pixel-purple">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-pixel-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="User" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white font-pixel mb-2">PixelDev</h3>
              <p className="text-pixel-gray mb-6">
                Инди-разработчик с 10+ летним опытом создания ретро-игр. 
                Специализируется на пиксель-арт и 8-bit музыке.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pixel-orange font-pixel">5</div>
                  <div className="text-pixel-gray text-sm">Игр</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pixel-yellow font-pixel">100K+</div>
                  <div className="text-pixel-gray text-sm">Скачиваний</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pixel-orange font-pixel">4.8★</div>
                  <div className="text-pixel-gray text-sm">Рейтинг</div>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <Button variant="outline" className="border-pixel-orange text-pixel-orange hover:bg-pixel-orange hover:text-white">
                  <Icon name="Github" size={16} className="mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" className="border-pixel-blue text-pixel-blue hover:bg-pixel-blue hover:text-white">
                  <Icon name="Twitter" size={16} className="mr-2" />
                  Twitter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 py-12 border-t-4 border-pixel-orange">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-pixel-orange animate-pixel-bounce"></div>
              <span className="text-white font-pixel text-xl font-bold">PIXEL GAME</span>
            </div>
            <p className="text-pixel-gray mb-6">© 2024 PixelDev. Все права защищены.</p>
            
            <div className="flex justify-center space-x-6">
              {['Discord', 'Steam', 'YouTube', 'Reddit'].map((platform) => (
                <button key={platform} className="text-pixel-gray hover:text-pixel-orange transition-colors">
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;