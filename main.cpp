#include <iostream>
#include <string>

// Função para apresentar o projeto
void apresentacaoProjeto() {
    std::string titulo = "Welcome to the Ultimate Pokemon Repository!";
    std::string descricao = "This project aims to become the largest repository for Pokemon enthusiasts worldwide. "
                            "Our goal is to create a comprehensive platform where fans can find everything related to Pokemon, "
                            "including information on all Pokemon species, games, trading cards, merchandise, and much more.";

    std::string features[] = {
        "Detailed information on all Pokemon species",
        "Comprehensive guides and walkthroughs for all Pokemon games",
        "Database of all Pokemon trading cards",
        "Marketplace for Pokemon merchandise",
        "Community forums and discussion boards",
        "Regular updates and new content"
    };

    std::cout << "==========================================" << std::endl;
    std::cout << titulo << std::endl;
    std::cout << "==========================================" << std::endl;
    std::cout << descricao << std::endl << std::endl;
    
    std::cout << "Features of our Repository:" << std::endl;
    for (const auto& feature : features) {
        std::cout << "- " << feature << std::endl;
    }
    
    std::cout << std::endl;
    std::cout << "Join us on this exciting journey and be a part of the biggest Pokemon community in the world!" << std::endl;
}

int main() {
    apresentacaoProjeto();
    return 0;
}
