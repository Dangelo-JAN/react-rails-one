class GreetingsController < ApplicationController
  def index
    greeting = Greeting.all.sample.message
    render json: { :greeting => greeting }, status: :ok
  end
end
