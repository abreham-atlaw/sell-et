import AsyncViewModel from "@/common/viewmodel/asyncViewModel";
import type PublishProductState from "../states/publishProductState";
import { ProductType } from "../../data/models/productType";
import DigitalProductForm from "../forms/digitalProductForm";
import DonationForm from "../forms/donationForm";
import PhysicalProductForm from "../forms/physicalProductForm";
import TicketForm from "../forms/ticketForm";
import PhysicalProductRepository from "../../data/repositories/physicalProductRepository";
import PhysicalProduct from "../../data/models/physicalProduct";
import SellerRepository from "@/apps/auth/data/repositories/sellerRepository";
import FirebaseFileStorage from "@/common/utils/firebaseStorage";
import DigitalProductRepository from "../../data/repositories/digitalProductRepository";
import DigitalProduct from "../../data/models/digitalProduct";
import DonationRepository from "../../data/repositories/donationRepository";
import Donation from "../../data/models/donation";
import TicketRepository from "../../data/repositories/ticketRepository";
import Ticket from "../../data/models/ticket";



export default class PublishProductViewModel extends AsyncViewModel<PublishProductState>{

    private sellerRepository = new SellerRepository();
    private fileStorage = new FirebaseFileStorage();
    
    private formMap = new Map<ProductType, Function>([
        [ProductType.digitalProducts, () => new DigitalProductForm()],
        [ProductType.donation, () => new DonationForm()],
        [ProductType.physicalProduct, () => new PhysicalProductForm()],
        [ProductType.ticket, () => new TicketForm()]
    ]);


    private physicalProductRepository = new PhysicalProductRepository();
    private digitalProductRepository = new DigitalProductRepository();
    private donationRepository = new DonationRepository();
    private ticketRepository = new TicketRepository();
    
    public async onInit(): Promise<void> {
        await super.onInit();
        this.state.shop = (await this.sellerRepository.getCurrentAccount()).shop!;
    }

    private async uploadFiles(files: File[]): Promise<string[]>{
        const urls: string[] = [];
        for(const file of files){
            urls.push(await this.fileStorage.uploadFile(file));
        }
        return urls;
    }

    chooseProductType(type: ProductType){
        this.state.productType = type;
        this.state.form = this.formMap.get(this.state.productType!)!();
        this.syncState();
    }

    resetProductType(){
        this.state.productType = undefined;
        this.state.form = undefined;
        this.syncState();
    }

    async publishPhysicalProduct(){
        this.asyncCall(
            async () => {
                const form = this.state.form as PhysicalProductForm;
                await form.validate(true);
                const images = await this.uploadFiles(form.productImages.getValue()!);
                const product = new PhysicalProduct(
                    null,
                    this.state.shop!.getPK()!,
                    images,
                    form.title.getValue()!,
                    Number.parseFloat(form.price.getValue()!.toString()),
                    form.description.getValue()!
                );
                await this.physicalProductRepository.create(product);
            }
        )
    }

    async publishDigitalProduct(){
        this.asyncCall(
            async () => {
                const form = this.state.form as DigitalProductForm;
                await form.validate(true);
                const productImage = await this.fileStorage.uploadFile(form.productImage.getValue()!);
                const fileUrl = await this.fileStorage.uploadFile(form.file.getValue()!);
                const product = new DigitalProduct(
                    null,
                    this.state.shop!.getPK()!,
                    fileUrl,
                    Number.parseFloat(form.price.getValue()!.toString()),
                    form.title.getValue()!,
                    form.description.getValue()!,
                    productImage
                );
                await this.digitalProductRepository.create(product);
            }
        )
    }

    async publishDonation(){
        this.asyncCall(
            async () => {
                const form = this.state.form as DonationForm;
                await form.validate(true);
                const donationImage = await this.fileStorage.uploadFile(form.donationImage.getValue()!);
                const donation = new Donation(
                    null,
                    this.state.shop!.getPK()!,
                    donationImage,
                    form.description.getValue()!,
                    Number.parseFloat(form.target.getValue()!.toString()),
                    form.title.getValue()!
                );
                await this.donationRepository.create(donation);
            }
        )
    }

    async publishTicket(){
        this.asyncCall(
            async () => {
                const form = this.state.form as TicketForm;
                await form.validate(true);
                const ticketImage = await this.uploadFiles([form.ticketImage.getValue()!]);
                const ticket = new Ticket(
                    null,
                    this.state.shop!.getPK()!,
                    ticketImage[0],
                    form.title.getValue()!,
                    Number.parseFloat(form.price.getValue()!.toString()),
                    form.description.getValue()!,
                    form.packages.getValue()!
                );
                await this.ticketRepository.create(ticket);
            }
        )
    }

    


}