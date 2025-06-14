using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class PlayerScript : MonoBehaviour
{

    public int totalCoins = 0;
    public GameObject coinText;
    private TextMeshProUGUI textComponent;
    Animator animator;

  

    private void UpdateCoinText()
    {
        {
            if (textComponent != null)
                textComponent.SetText( "Coins: " + totalCoins);
        }
    }

        private void Start()
    {
        if (coinText != null)
            textComponent = coinText.GetComponent<TextMeshProUGUI>();

        UpdateCoinText();
        animator = GetComponent<Animator>();
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Coin"))
        {
            totalCoins++;
            Debug.Log("Зібрано монет: " + totalCoins);
            Destroy(other.gameObject);
            UpdateCoinText();
        }
    }

void Update()
    {
        GetComponent<Rigidbody2D>().velocity = new Vector2(Input.GetAxis("Horizontal") * 5f, Input.GetAxis("Vertical") * 5f);
        animator.SetFloat("SpeedX", GetComponent<Rigidbody2D>().velocity.x);
        animator.SetFloat("SpeedY", GetComponent<Rigidbody2D>().velocity.y);
       
    }

   
}

